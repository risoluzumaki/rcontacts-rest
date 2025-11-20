package contact

type Contact struct {
	ID     int    `json:"id"`
	UserID int    `json:"user_id"`
	Name   string `json:"name"`
	Email  string `json:"email"`
	Phone  string `json:"phone"`
}

type ContactResponse struct {
	Message string `json:"message"`
}
