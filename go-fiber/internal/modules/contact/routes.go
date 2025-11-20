package contact

import (
	"github.com/dist-r/rcontacts-rest/go-fiber/pkg/middleware"
	"github.com/gofiber/fiber/v2"
)

func ContactRoutes(r fiber.Router, h *ContactHandler) {
	r.Use("contacts", middleware.AuthMiddleware)
	r.Post("/contacts", h.CreateContact)
	r.Get("/contacts", h.GetAllContacts)
	r.Put("/contacts/:id", h.UpdateContact)
	r.Delete("/contacts/:id", h.DeleteContact)
}
