# Séparation de rp2018 en fichiers CSV par département

library(tidyverse)
library(questionr)
library(glue)

path <- "./resources/data/rp2018"

data(rp2018)

# Split par département
l <- rp2018 |>
    select(code_insee:departement, log_rp:appart) |>
    group_by(departement) |>
    group_split()

# Export csv
l |> walk(function(df) {
    dep <- df$code_departement[1]
    # On enlève code_departement pour éviter les problèmes de bind_rows dans les
    # exerices.
    df <- df |> select(-code_departement)
    file <- glue("{path}/rp2018_{dep}.csv")
    write_csv(df, file)
})
