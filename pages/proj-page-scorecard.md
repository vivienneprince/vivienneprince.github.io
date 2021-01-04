<span style="font-weight: bold; color: black; font-size:180%; line-height: 32px;"> US College Data EDA  </span>  <br>
<span style="color:darkgrey;">August 2020 &nbsp;&ndash;&nbsp; with Amanda Norton and Steven Spielman </span>


**Overview:**   
An exploration of US College data found at [collegescorecard.ed.gov/data/](https://collegescorecard.ed.gov/data/).   

*Language used: R*

Click here to check out our [mardown report](/assets/docs/scorecard-report.html). :-) 


<br>  


Here's a preview of our report:   

<img src="../assets/images/scorecard-preview.png?raw=true"/>  


Code I wrote to obtain data using the scorecard API:  

```R
#Package import
# install.packages("googlesheets4")
library(googlesheets4)
library(rscorecard)


#Import field variables
gs4_deauth()
starfish.fields <- read_sheet('https://docs.google.com/spreadsheets/d/1PL5zn6QLU9GSSD8rRreL8r7xaoClrPIrf5qnioZ3eE4/edit?usp=sharing')
head(starfish.fields)
starfish.colnames <- tolower(starfish.fields[['VARIABLE NAME']])



# Accessing Data
sc_key('lt36uO4r7wWfcijac20x6e6FforftHUitahjuh1A')

starfish.df <- sc_init() %>%  
    sc_filter(stabbr == 'FL') %>% 
    sc_select_(starfish.colnames) %>%
    sc_get()

for (year in 2015:2018) {
  starfishdf.temp <- sc_init() %>%
    sc_filter(stabbr == 'FL') %>%
    sc_select_(starfish.colnames) %>%
    sc_year(year) %>%
    sc_get()
  starfish.df <- rbind(starfish.df, starfishdf.temp)
}


head(starfishdf)

write.csv(starfishdf,'starfishdf.csv')
```

For more details see our [git repo](https://github.com/vivienneprince/College-Scorecard---Munging-EDA-Project).
