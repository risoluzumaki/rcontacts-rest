package user

import (
	"github.com/dist-r/rcontacts-rest/go-fiber/pkg/middleware"
	"github.com/gofiber/fiber/v2"
)

func UserRoutes(r fiber.Router, h *UserHandler) {
	r.Post("/auth/register", h.RegisterUser)
	r.Post("/auth/login", h.LoginUser)
	r.Get("/users/profile", middleware.AuthMiddleware, h.GetUserProfile)
}
