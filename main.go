package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
)

func main() {
	port, ok := os.LookupEnv("PORT")
	if !ok {
		log.Fatal("Error loading env variables.")
	}
	router := mux.NewRouter()

	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./homepage"))))

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Println(err)
	}
}
