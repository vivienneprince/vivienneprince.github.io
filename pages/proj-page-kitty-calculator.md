<span style="font-weight: bold; color: black; font-size:180%; line-height: 32px;">Kitty Calculator  </span>  <br>
<span style="color:darkgrey;">September 2022 &nbsp;&ndash;&nbsp; for Kitty Resort</span>

<img src="../assets/images/kitty-title.png?raw=true"/>  

**Overview:**   
As video game fans, we decided to take a look at the relationship between video game sales and various variables such as critic/ user ratings, game genre, target audience, and the like.  
We also were intrested in the distribution of these variables in our video game dataset pulled from VGChartz (video game data tracking website).

**Tools:**  
<span style="color:grey">Tidyverse:</span> data cleaning/ reshaping  
<span style="color:grey">ggplot/ plotly:</span> viz

*Language used: R/ Markdown*

To check out our full findings, take a look at our [presentation (pdf)](/assets/docs/presentation-video-game-sales.pdf).  
Data cleaning/ viz code [link (github)](https://github.com/vivienneprince/VideoGameSales).


<br>  

Preview of the calculator:

<img src="../assets/images/video-games-dashboard.png?raw=true"/>    


Code:  

```R
vs_sales.byregion.byyear <- vs_byregion %>% 
  group_by(Year, Region)  %>% 
  summarize(SSales = sum(Sales)) 
vs_sales.byregion.byyear$MSales <- vs_byregion %>% 
  group_by(Year, Region)  %>% 
  summarize(means = mean(Sales)) %>%
  pull(means)

summary.data <- videogames.clean %>%
  group_by(Year) %>%
  summarise(SSales = sum(Global_Sales), 
            MSales = mean(Global_Sales),
            Critic = mean(Critic_Score))


ggplotly(
vs_sales.byregion.byyear %>% ggplot(aes(x=Year))+
  theme_minimal() +
  ggtitle("Sales per region superimposed with average critic scores per region over time") +
  ylab("Sales (mil USD)") +
  geom_line(aes(y= SSales, color = Region))+
  geom_line(linetype = "dotted", aes(y= MSales*100, color = Region))+
  geom_bar()
)
```