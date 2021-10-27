# On conserve uniquement 2019 et 2020 et on
# filtre les lignes des prénoms rares regroupés
filter_data <- function(df) {
    df %>%
        filter(annais %in% c("2019", "2020")) %>%
        filter(preusuel != "_PRENOMS_RARES")
}

# Passage d'un format avec les années en ligne à un
# format avec les années en colonnes
pivot_2019_2020 <- function(df) {
    df %>%
        tidyr::pivot_wider(names_from = annais, values_from = nombre) %>%
        relocate(`2020`, .after = `2019`)
}
