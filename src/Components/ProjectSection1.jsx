import React from 'react'




function ProjectSection1() {
  return (
    <>
     <div className="aboutMain" style={{marginBottom:"10%", marginTop:"6%"}}>
        <div className="left">
       <svg xmlns="http://www.w3.org/2000/svg" width="500" height="500" fill="none" viewBox="0 0 3000 3000" id="business-task-list"><path fill="#F1F1F1" d="M871.183 790.389C871.183 747.686 905.8 713.069 948.502 713.069H2062.76C2105.46 713.069 2140.08 747.686 2140.08 790.389V2400.19C2140.08 2442.89 2105.46 2477.51 2062.76 2477.51H948.502C905.8 2477.51 871.183 2442.89 871.183 2400.19V790.389Z"></path><path fill="#FAC22F" fill-rule="evenodd" d="M655.672 226.804C655.672 209.238 669.911 194.999 687.477 194.999H791.683C809.248 194.999 823.488 209.238 823.488 226.804V226.804C823.488 241.193 833.21 253.634 846.783 258.412C884.818 271.803 919.588 292.118 949.582 317.845C960.517 327.225 976.171 329.419 988.647 322.215V322.215C1003.89 313.417 1023.37 318.638 1032.17 333.878L1084.24 424.057C1093.03 439.278 1087.81 458.742 1072.59 467.529V467.529C1060.13 474.721 1054.21 489.347 1056.85 503.486C1060.43 522.745 1062.3 542.606 1062.3 562.904C1062.3 583.202 1060.43 603.062 1056.85 622.321C1054.21 636.461 1060.13 651.086 1072.59 658.278V658.278C1087.81 667.065 1093.02 686.529 1084.24 701.75L1032.17 791.929C1023.37 807.169 1003.89 812.39 988.647 803.592V803.592C976.171 796.388 960.517 798.582 949.582 807.962C919.588 833.689 884.818 854.004 846.783 867.395C833.21 872.173 823.488 884.614 823.488 899.003V899.003C823.488 916.569 809.248 930.809 791.683 930.809H687.477C669.911 930.809 655.672 916.569 655.672 899.003V899.003C655.672 884.614 645.949 872.173 632.377 867.395C594.342 854.004 559.571 833.689 529.578 807.962C518.643 798.582 502.989 796.388 490.512 803.591V803.591C475.273 812.39 455.786 807.169 446.988 791.929L394.922 701.75C386.135 686.528 391.35 667.065 406.571 658.277V658.277C419.026 651.086 424.946 636.46 422.314 622.321C418.73 603.062 416.856 583.201 416.856 562.904C416.856 542.606 418.73 522.745 422.314 503.486C424.946 489.347 419.026 474.721 406.571 467.53V467.53C391.35 458.742 386.135 439.279 394.923 424.058L446.988 333.878C455.786 318.638 475.273 313.417 490.512 322.216V322.216C502.989 329.419 518.643 327.225 529.578 317.845C559.571 292.119 594.342 271.803 632.377 258.412C645.949 253.634 655.672 241.193 655.672 226.804V226.804ZM923.74 562.904C923.74 666.571 841.382 750.61 739.788 750.61C638.194 750.61 555.835 666.571 555.835 562.904C555.835 459.236 638.194 375.197 739.788 375.197C841.382 375.197 923.74 459.236 923.74 562.904Z" clip-rule="evenodd"></path><path fill="#F15846" fill-rule="evenodd" d="M1462.8 371.047C1467.96 362.478 1479.1 359.719 1487.67 364.885L1538.5 395.531C1547.07 400.697 1549.83 411.832 1544.67 420.401V420.401C1540.43 427.421 1541.52 436.349 1546.73 442.672C1561.35 460.391 1572.34 480.527 1579.4 501.899C1581.98 509.691 1588.97 515.365 1597.18 515.52V515.52C1607.2 515.71 1615.17 523.988 1614.98 534.01L1613.86 593.316C1613.67 603.326 1605.4 611.287 1595.39 611.098V611.098C1587.2 610.943 1580.01 616.337 1577.14 624.009C1573.22 634.458 1568.29 644.698 1562.32 654.6C1556.35 664.503 1549.6 673.64 1542.19 681.982C1536.74 688.106 1535.33 696.982 1539.29 704.153V704.153C1544.13 712.917 1540.95 723.945 1532.19 728.786L1480.27 757.468C1471.49 762.314 1460.45 759.131 1455.61 750.356V750.356C1451.64 743.173 1443.36 739.64 1435.26 740.999C1413.06 744.729 1390.13 744.414 1367.63 739.76C1359.61 738.1 1351.21 741.31 1346.97 748.329V748.329C1341.81 756.899 1330.67 759.658 1322.1 754.492L1271.27 723.845C1262.7 718.679 1259.94 707.544 1265.11 698.975V698.975C1269.34 691.955 1268.25 683.027 1263.04 676.704C1248.42 658.985 1237.43 638.849 1230.37 617.477C1227.79 609.685 1220.8 604.011 1212.59 603.856V603.856C1202.57 603.666 1194.6 595.388 1194.79 585.366L1195.91 526.06C1196.1 516.05 1204.37 508.089 1214.38 508.278V508.278C1222.57 508.433 1229.76 503.039 1232.63 495.367C1236.55 484.918 1241.48 474.678 1247.45 464.776C1253.42 454.873 1260.17 445.736 1267.58 437.395C1273.03 431.271 1274.44 422.395 1270.48 415.223V415.223C1265.64 406.46 1268.82 395.431 1277.58 390.59L1329.5 361.909C1338.28 357.062 1349.32 360.246 1354.17 369.02V369.02C1358.13 376.203 1366.42 379.737 1374.51 378.377C1396.71 374.647 1419.64 374.962 1442.14 379.616C1450.16 381.276 1458.57 378.066 1462.8 371.047V371.047ZM1493.92 613.363C1464.28 662.536 1400.38 678.367 1351.21 648.723C1302.04 619.079 1286.21 555.186 1315.85 506.013C1345.49 456.84 1409.39 441.009 1458.56 470.653C1507.73 500.297 1523.56 564.19 1493.92 613.363Z" clip-rule="evenodd"></path><path fill="#53B3CC" fill-rule="evenodd" d="M1901.14 411.729C1905.7 409.337 1911.33 411.091 1913.72 415.646L1927.91 442.669C1930.3 447.225 1928.55 452.856 1923.99 455.248V455.248C1920.26 457.208 1918.36 461.423 1918.97 465.594C1920.67 477.281 1920.14 489.064 1917.55 500.345C1916.61 504.458 1918.17 508.817 1921.74 511.071V511.071C1926.1 513.825 1927.4 519.589 1924.64 523.946L1908.35 549.728C1905.6 554.08 1899.84 555.378 1895.49 552.627V552.627C1891.93 550.377 1887.33 550.833 1884.02 553.441C1879.51 556.993 1874.62 560.184 1869.35 562.948C1864.09 565.712 1858.68 567.931 1853.2 569.624C1849.18 570.867 1846.19 574.393 1846.02 578.603V578.603C1845.81 583.746 1841.48 587.749 1836.33 587.543L1805.86 586.321C1800.71 586.115 1796.7 581.772 1796.91 576.622V576.622C1797.08 572.406 1794.38 568.645 1790.45 567.087C1779.7 562.812 1769.69 556.562 1761.04 548.522C1757.96 545.653 1753.4 544.826 1749.67 546.785V546.785C1745.12 549.177 1739.49 547.423 1737.09 542.868L1722.9 515.845C1720.51 511.289 1722.27 505.658 1726.82 503.266V503.266C1730.55 501.306 1732.45 497.091 1731.85 492.921C1730.14 481.234 1730.67 469.45 1733.26 458.168C1734.2 454.055 1732.64 449.697 1729.07 447.443V447.443C1724.72 444.689 1723.42 438.924 1726.17 434.568L1742.47 408.785C1745.22 404.434 1750.98 403.136 1755.33 405.886V405.886C1758.89 408.137 1763.49 407.681 1766.8 405.073C1771.3 401.521 1776.2 398.33 1781.46 395.566C1786.72 392.802 1792.13 390.584 1797.61 388.891C1801.64 387.648 1804.62 384.121 1804.79 379.911V379.911C1805 374.767 1809.34 370.765 1814.48 370.971L1844.96 372.193C1850.11 372.399 1854.11 376.741 1853.91 381.892V381.892C1853.74 386.108 1856.44 389.869 1860.36 391.427C1871.12 395.702 1881.12 401.953 1889.77 409.992C1892.86 412.861 1897.41 413.689 1901.14 411.729V411.729ZM1850.26 526.586C1824.12 540.312 1791.8 530.249 1778.08 504.11C1764.35 477.971 1774.41 445.654 1800.55 431.928C1826.69 418.202 1859.01 428.265 1872.74 454.404C1886.46 480.544 1876.4 512.86 1850.26 526.586Z" clip-rule="evenodd"></path><path fill="#F15846" fill-rule="evenodd" d="M550.488 1930.03C554.673 1923.09 563.693 1920.86 570.635 1925.04L611.816 1949.87C618.758 1954.05 620.993 1963.07 616.808 1970.01V1970.01C613.38 1975.7 614.258 1982.93 618.483 1988.06C630.324 2002.41 639.225 2018.72 644.949 2036.03C647.036 2042.35 652.7 2046.94 659.347 2047.07V2047.07C667.465 2047.22 673.922 2053.93 673.769 2062.05L672.86 2110.09C672.707 2118.2 666.009 2124.65 657.9 2124.49V2124.49C651.264 2124.37 645.44 2128.74 643.112 2134.95C639.94 2143.42 635.949 2151.71 631.113 2159.74C626.277 2167.76 620.805 2175.16 614.8 2181.92C610.391 2186.88 609.246 2194.07 612.455 2199.88V2199.88C616.377 2206.98 613.801 2215.91 606.702 2219.83L564.641 2243.07C557.533 2246.99 548.588 2244.41 544.662 2237.31V2237.31C541.447 2231.49 534.738 2228.62 528.182 2229.73C510.2 2232.75 491.618 2232.49 473.397 2228.72C466.895 2227.38 460.089 2229.98 456.661 2235.66V2235.66C452.476 2242.61 443.456 2244.84 436.514 2240.66L395.332 2215.83C388.391 2211.64 386.156 2202.62 390.341 2195.68V2195.68C393.769 2190 392.89 2182.76 388.665 2177.64C376.824 2163.29 367.923 2146.98 362.199 2129.66C360.112 2123.35 354.449 2118.75 347.802 2118.63V2118.63C339.683 2118.47 333.226 2111.77 333.38 2103.65L334.289 2055.61C334.442 2047.5 341.14 2041.05 349.249 2041.2V2041.2C355.884 2041.33 361.708 2036.96 364.037 2030.74C367.209 2022.28 371.2 2013.98 376.036 2005.96C380.872 1997.94 386.344 1990.54 392.349 1983.78C396.757 1978.82 397.902 1971.63 394.693 1965.82V1965.82C390.772 1958.72 393.348 1949.79 400.447 1945.87L442.508 1922.63C449.615 1918.7 458.56 1921.28 462.487 1928.39V1928.39C465.701 1934.21 472.41 1937.07 478.966 1935.97C496.949 1932.95 515.53 1933.21 533.751 1936.98C540.254 1938.32 547.06 1935.72 550.488 1930.03V1930.03ZM575.7 2126.33C551.686 2166.16 499.927 2178.99 460.093 2154.97C420.259 2130.96 407.434 2079.2 431.448 2039.37C455.463 1999.53 507.222 1986.71 547.056 2010.72C586.89 2034.74 599.714 2086.5 575.7 2126.33Z" clip-rule="evenodd"></path><path fill="#fff" d="M803.608 730.322C803.608 687.62 838.225 653.003 880.928 653.003H1995.19C2037.89 653.003 2072.51 687.62 2072.51 730.322V2340.13C2072.51 2382.83 2037.89 2417.45 1995.19 2417.45H880.928C838.225 2417.45 803.608 2382.83 803.608 2340.13V730.322Z"></path><path fill="#3E3D3D" fill-rule="evenodd" d="M795.876 730.322C795.876 683.35 833.955 645.271 880.928 645.271H1995.19C2042.16 645.271 2080.24 683.35 2080.24 730.322V2340.13C2080.24 2387.1 2042.16 2425.18 1995.19 2425.18H880.928C833.955 2425.18 795.876 2387.1 795.876 2340.13V730.322ZM880.928 660.735C842.496 660.735 811.34 691.89 811.34 730.322V2340.13C811.34 2378.56 842.496 2409.71 880.928 2409.71H1995.19C2033.62 2409.71 2064.77 2378.56 2064.77 2340.13V730.322C2064.77 691.89 2033.62 660.735 1995.19 660.735H880.928Z" clip-rule="evenodd"></path><path fill="#3E3D3D" d="M1073.91 653.003H1809.72L1781.34 732.461C1775.84 747.848 1761.27 758.118 1744.93 758.118H1138.69C1122.35 758.118 1107.78 747.848 1102.28 732.461L1073.91 653.003Z"></path><path fill="#E5E5E5" fill-rule="evenodd" d="M1598.93 911.479H1840.31V1152.86H1598.93V911.479ZM1637.59 950.139V1114.2H1801.65V950.139H1637.59Z" clip-rule="evenodd"></path><path fill="#53B3CC" d="M1028.86 908.284H1404.27V2177.18H1028.86V908.284Z"></path><path fill="#E5E5E5" fill-rule="evenodd" d="M1598.93 1422.04H1840.31V1663.42H1598.93V1422.04zM1637.59 1460.7V1624.76H1801.65V1460.7H1637.59zM1598.93 1932.6H1840.31V2173.99H1598.93V1932.6zM1637.59 1971.26V2135.33H1801.65V1971.26H1637.59z" clip-rule="evenodd"></path><path fill="#FAC22F" fill-rule="evenodd" d="M2360.62 617.217C2366.06 592.179 2390.76 576.29 2415.8 581.728L2854.77 677.07C2879.81 682.508 2895.69 707.214 2890.26 732.251L2753.23 1363.16C2747.79 1388.19 2723.08 1404.08 2698.05 1398.64L2259.08 1303.3C2234.04 1297.86 2218.15 1273.16 2223.59 1248.12L2360.62 617.217ZM2412.52 596.84C2395.83 593.215 2379.36 603.807 2375.73 620.499L2238.7 1251.4C2235.08 1268.1 2245.67 1284.57 2262.36 1288.19L2701.33 1383.53C2718.02 1387.16 2734.49 1376.57 2738.12 1359.87L2875.14 728.969C2878.77 712.277 2868.18 695.807 2851.49 692.182L2412.52 596.84Z" clip-rule="evenodd"></path><path fill="#53B3CC" d="M264.939 998.383L736.034 1171.99L482.1 1861.05L11.0055 1687.45L264.939 998.383Z"></path><path fill="#46A4BC" d="M316.724 1092.08L633.009 1208.68 578.097 1357.63 261.813 1241.02 316.724 1092.08zM426.544 1366.12L556.219 1413.92 503.013 1558.24 373.338 1510.43 426.544 1366.12zM352.926 1565.88L482.601 1613.69 429.395 1758.01 299.72 1710.2 352.926 1565.88zM241.251 1301.11L364.188 1346.44 310.982 1490.75 188.045 1445.43 241.251 1301.11zM167.634 1500.88L290.57 1546.2 237.364 1690.52 114.428 1645.19 167.634 1500.88z"></path><path fill="#53B3CC" d="M2087.52 1839.31H2252.7V2177.18H2087.52V1839.31Z"></path><path fill="#F15846" d="M2335.29 1621.57H2500.48V2177.18H2335.29V1621.57Z"></path><path fill="#FAC22F" d="M2598.08 1726.69H2763.27V2177.18H2598.08V1726.69Z"></path><path fill="#3E3D3D" d="M1524.4 656.757C1524.4 704.444 1485.74 743.102 1438.06 743.102C1390.37 743.102 1351.71 704.444 1351.71 656.757C1351.71 609.07 1390.37 570.412 1438.06 570.412C1485.74 570.412 1524.4 609.07 1524.4 656.757Z"></path><path fill="#EFCB96" d="M488.261 2173.43L291.601 2770.31C280.399 2804.31 281.339 2841.14 294.262 2874.52L319.325 2939.27H717.263L647.449 2825.5C627.162 2792.44 620.013 2753.03 627.545 2714.98 653.964 2581.5 695.456 2375.86 713.509 2301.07 739.788 2192.2 773.575 2203.46 818.625 2109.61 863.674 2015.75 874.937 2012 852.412 1989.47 834.392 1971.45 812.368 1996.98 803.608 2012 811.117 1944.42 792.346 1895.62 736.034 1876.85 679.722 1858.08 638.426 1850.57 593.377 1865.59 548.327 1880.6 518.294 1959.44 510.786 2034.52 504.779 2094.59 493.267 2152.15 488.261 2173.43zM2021.98 2494.34L1798.53 2884.98 1922.34 2939.27 2207.65 2939.27 2399.53 2547.91C2421.15 2503.82 2420.54 2452.08 2397.89 2408.51L2188.49 2005.68C2164.87 1961.23 2116.78 1866.92 2113.35 1845.33 2098.08 1752.73 2082.93 1690.39 2044.06 1636.53 2012.97 1593.44 1970.49 1598.64 1953.14 1606.63 1918.08 1596.34 1893.89 1617.11 1886.18 1628.78 1853.02 1627.8 1836.45 1654.28 1832.32 1667.64L1755.04 1556.2C1743.33 1538.39 1714.05 1507.38 1690.66 1525.72 1667.26 1544.07 1672.04 1565.07 1677.35 1573.27L1751.92 1707.08 1742.78 1782.63C1739.26 1811.7 1750.15 1843.1 1769.29 1865.27 1776.85 1874.03 1785.98 1884.76 1796.92 1897.82 1839.21 1948.31 1874.93 1961.45 1887.51 1961.71L2033.19 2365.02C2048.6 2407.68 2044.5 2454.96 2021.98 2494.34z"></path><path fill="#53B3CC" d="M1768.92 2817.11L1689.58 2939.27L1820.98 2939.27L2034.96 2939.27L1768.92 2817.11Z"></path><path fill="#53B3CC" fill-rule="evenodd" d="M1907.77 949.946L1717.44 1094.76L1657.74 989.124L1691.4 970.101L1729.3 1037.16L1884.36 919.18L1907.77 949.946Z" clip-rule="evenodd"></path><path fill="#FAC22F" d="M2215.09 687.094C2210.98 666.141 2224.64 645.827 2245.59 641.72L2686.41 555.323C2707.36 551.216 2727.67 564.873 2731.78 585.825L2855.96 1219.39C2860.06 1240.34 2846.41 1260.65 2825.45 1264.76L2384.64 1351.16C2363.69 1355.26 2343.37 1341.61 2339.26 1320.65L2215.09 687.094Z"></path><path fill="#E9B11D" fill-rule="evenodd" d="M2671.75 736.267L2332.49 804.291L2329.45 789.129L2668.71 721.105L2671.75 736.267ZM2697.52 864.805L2358.26 932.829L2355.22 917.667L2694.48 849.643L2697.52 864.805ZM2723.29 993.343L2384.03 1061.37L2380.99 1046.2L2720.25 978.181L2723.29 993.343ZM2748.56 1119.36L2409.3 1187.38L2406.26 1172.22L2745.52 1104.2L2748.56 1119.36Z" clip-rule="evenodd"></path><path fill="#3E3D3D" fill-rule="evenodd" d="M0 2939.27C0 2935 3.46172 2931.54 7.73196 2931.54H2992.27C2996.54 2931.54 3000 2935 3000 2939.27C3000 2943.54 2996.54 2947 2992.27 2947H7.73196C3.46172 2947 0 2943.54 0 2939.27Z" clip-rule="evenodd"></path></svg>
       
        </div>
        <div className="right">
          <h1
            style={{
              color: "rgb(19, 185, 185)",
              textAlign: "left",
              paddingLeft: "20px",
            }}
          >
           Projects
          </h1>
          <br />
          <hr id="hr" />
          <p>
          I've undertaken numerous projects across several technologies, encompassing HTML/CSS, Figma, JavaScript, and React.js.
           These projects have served as pivotal learning experiences, fostering a comprehensive understanding of each technology. 
           Continuously seeking to broaden my expertise, I'm committed to
              expanding my project portfolio with each new technological exploration.
          </p>
        </div>
      </div>
     
    
    </>
  )
}

export default ProjectSection1