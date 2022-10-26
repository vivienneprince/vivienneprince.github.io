<span style="font-weight: bold; color: black; font-size:180%; line-height: 32px;">Kitty Calculator  </span>  <br>
<span style="color:darkgrey;">September 2022 &nbsp;&ndash;&nbsp; for Kitty Resort</span>

<img src="../assets/images/kitty-title.png?raw=true"/>  

**Overview:**   
A small nifty calculator to help players make in-game spending decisions by showing how much time they would have to save up to reach an desired amount.

**Tools:**  
<span style="color:grey">HTML/CSS:</span> data cleaning/ reshaping  
<span style="color:grey">JS:</span> calculations and

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