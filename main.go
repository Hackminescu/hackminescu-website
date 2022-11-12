package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gorilla/mux"
)

type Participant struct {
	Name  string `json:"name"`
	Class string `json:"class"`
	Phone string `json:"phone_number"`
	Email string `json:"email"`
}

type Registration struct {
	Participants       []Participant `json:"participants"`
	ProjectName        string        `json:"project_name"`
	ProjectDescription string        `json:"project_description"`
	SpectatorName      string        `json:"spectator_name"`
}

// Registration method for both participants and spectators
func registration(w http.ResponseWriter, r *http.Request) {
	// Only POST requests are accepted for registration
	if r.Method != "POST" {
		http.Error(w, http.StatusText(http.StatusMethodNotAllowed), http.StatusMethodNotAllowed)
	}

	// registration_type stores wether a participant or
	// spectator has registered.
	registration_type := r.Header.Get("registration_type")

	b, err := ioutil.ReadAll(r.Body)
	defer r.Body.Close()
	if err != nil {
		http.Error(w, err.Error(), 500)
		return
	}

	// Reading the request as JSON and storing participants and
	// the project's details.
	registration := Registration{}
	json.Unmarshal([]byte(b), &registration)
	fmt.Println(registration_type, registration)
}

func main() {
	port := "8000"
	router := mux.NewRouter()

	router.PathPrefix("/participant-registration").HandlerFunc(registration).Methods("POST")

	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./homepage"))))

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Println(err)
	}
}
