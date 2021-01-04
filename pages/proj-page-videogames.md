<span style="font-weight: bold; color: black; font-size:180%; line-height: 32px;">Video Game Sales Data Analysis  </span>  <br>
<span style="color:darkgrey;">December 2020 &nbsp;&ndash;&nbsp; with Amanda Norton and Ben Weisman</span>

<img src="../assets/images/video-games-cover.png?raw=true"/>  

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

These are some visualizations I created for our presentation:

<img src="../assets/images/video-games-dashboard.png?raw=true"/>    

<br>
Here's a test plot I did during EDA and my code:  

<img src="../assets/images/video-games-test-plot.png?raw=true"/>  


My code:  

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