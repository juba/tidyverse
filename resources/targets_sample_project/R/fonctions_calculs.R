# Calcul des indicateurs d'évolution en effectifs et pourcentages
# pour les prénoms dont la fréquence est > à min_n
calcule_evo <- function(df, min_n = 200) {
    df %>%
        filter(`2020` > min_n | `2019` > min_n) %>%
        mutate(
            evo = (`2020` - `2019`),
            `evo%` = round(evo / `2019` * 100, 1)
        ) %>%
        drop_na(evo)
}
