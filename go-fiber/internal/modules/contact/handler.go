package contact

import (
	"context"
	"strconv"

	"time"

	"github.com/gofiber/fiber/v2"
)

type ContactHandler struct {
	service ContactService
}

func NewContactHandler(service ContactService) *ContactHandler {
	return &ContactHandler{service: service}
}

func (ch *ContactHandler) CreateContact(c *fiber.Ctx) error {
	context.Background()
	contact := &Contact{}
	userId := c.Locals("userID").(int)
	contact.UserID = userId
	if err := c.BodyParser(contact); err != nil {
		return err
	}
	err := ch.service.CreateContact(context.Background(), contact)
	if err != nil {
		return err
	}

	return c.Status(201).JSON(&ContactResponse{Message: "Contact created successfully"})
}

func (ch *ContactHandler) GetAllContacts(c *fiber.Ctx) error {
	userID, ok := c.Locals("userID").(int)
	if !ok {
		return fiber.ErrUnauthorized
	}
	contacts, err := ch.service.FindAllContact(context.Background(), userID)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(contacts)
}

func (ch *ContactHandler) UpdateContact(c *fiber.Ctx) error {
	context.Background()
	contactId, erro := strconv.Atoi(c.Params("id"))

	if erro != nil {
		return erro
	}
	contact := &Contact{}
	contact.ID = contactId
	if err := c.BodyParser(contact); err != nil {
		return err
	}

	err := ch.service.UpdateContact(context.Background(), contact)
	if err != nil {
		return err
	}

	return c.Status(200).JSON(&ContactResponse{Message: "Contact updated successfully"})
}

func (ch *ContactHandler) DeleteContact(c *fiber.Ctx) error {
	contactId, erro := strconv.Atoi(c.Params("id"))
	if erro != nil {
		return erro
	}
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()

	err := ch.service.DeleteContact(ctx, contactId)
	if err != nil {
		return err
	}

	return c.SendStatus(204)
}
