package middleware

import (
	"github.com/dist-r/rcontacts-rest/go-fiber/pkg/utils"
	"github.com/gofiber/fiber/v2"
)

func AuthMiddleware(c *fiber.Ctx) error {
	token := c.Get("Authorization")
	if token == "" {
		return fiber.ErrUnauthorized
	}
	//  Remove bearer
	token = token[7:]

	claims, err := utils.VerifyToken(token)
	if err != nil {
		return fiber.ErrUnauthorized
	}
	c.Locals("userID", claims.UserID)
	c.Locals("userEmail", claims.Email)
	return c.Next()
}
