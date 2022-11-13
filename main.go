package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
)

func main() {
	port := "8000"
	router := mux.NewRouter()

	router.PathPrefix("/").Handler(http.StripPrefix("/", http.FileServer(http.Dir("./homepage"))))

	err := http.ListenAndServe(":"+port, router)
	if err != nil {
		fmt.Println(err)
	}
}
