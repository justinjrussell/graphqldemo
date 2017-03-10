package main

import (
    "net/http"
    "github.com/graphql-go/graphql"
    "github.com/graphql-go/graphql-go-handler"
)
    
var queryType = graphql.NewObject(graphql.ObjectConfig{
    Name: "Query",
    Fields: graphql.FieldConfigMap{
        "latestPost": &graphql.FieldConfig{
            Type: graphql.String,
            Resolve: func(p graphql.GQLFRParams) interface{}{
                return "Hello World!"
            },
        },
    },
})

var Schema, _ = graphql.NewSchema(graphql.SchemaConfig{
    Query: queryType,
})

func main(){
    h := handler.New(&handler.Config{
        Schema: &Schema,
        Pretty: true,
    })
    
    http.Handle("/graphql", h)
    http.ListenAndServe(":8080", nil)
}