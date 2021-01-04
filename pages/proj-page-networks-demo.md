<span style="font-weight: bold; color: black; font-size:180%; line-height: 32px;"> Network Algorithms Demo in Python  </span>  <br>
<span style="color:darkgrey;">October 2020 &nbsp;&ndash;&nbsp; Me</span>


**Overview:**   
Here's a little demo I made for some of the network algorithms I implemented in action.

**Tools:**  
<span style="color:grey">Numpy:</span> matrix operations  
<span style="color:grey">timeit:</span> record experimental runtime values  
<span style="color:grey">Matplotlib:</span> viz  
<span style="color:grey">networkx:</span> validation  

*Language used: Python*

See my [**demo**](https://colab.research.google.com/drive/1WAA5icd71fknlNu7Vo73SLOERxj4Dhti?usp=sharing) here. :-D


<br>  

 
Here's a preview of the demo:

<img src="../assets/images/network-demo-preview.png?raw=true"/>  


<br>  

My Bellman-Ford implementation that I used to find the probablity of success for signals routed from one node to another (assuming independence):  

```python
def BFL_0(edge_list):
    V = max_NL(edge_list) + 1

    # bellman ford list in form [[weight, parent], ...
    BFL = np.full((V, 2), np.inf)
    BFL[0] = [0, 0]
    BFL[:, 1] = None
    for k in range(0, V):
        for E in edge_list:
            i, j, w = E
            d = min(BFL[i, 0] + w, BFL[j, 0])
            if d == BFL[j, 0]: BFL[j, 0] = d  # did not relax
            else: BFL[j] = [d, i]  # relaxed
    return BFL

def shortest_path_BFL(BFL, v):
    # args: bellman ford list, target vertex
    shortest_path_0_20 = []
    while v in range(v, 0, -1):
        parent = int(BFL[v, 1])
        shortest_path_0_20.append(parent)
        v = parent
    return shortest_path_0_20

# EL2 = [[i, j, 1 / w] for i, j, w in EL]

signalprob = np.prod([1. / BFL_0(EL)[i, 0] for i in shortest_path_BFL(BFL_0(EL), 20) if i != 0])
print("""∴ P_max(success for a signal routed from 0 to 20) = """, np.round(signalprob, 4))
```