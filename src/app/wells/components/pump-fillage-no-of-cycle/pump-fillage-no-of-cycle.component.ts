import { Component } from '@angular/core';
import { SurfaceCardPumpService } from '../../../shared/services/surface-card-pump.service';
import * as Highcharts from "highcharts/highstock";

@Component({
  selector: 'app-pump-fillage-no-of-cycle',
  templateUrl: './pump-fillage-no-of-cycle.component.html',
  styleUrls: ['./pump-fillage-no-of-cycle.component.scss']
})
export class PumpFillageNoOfCycleComponent {
  public surfaceCardpump: any=[];

  constructor(private service:SurfaceCardPumpService ) {}

  ngOnInit(): void {
    this.getChartData();
 }
 
 getChartData(): void{
  this.chartSubscription = this.service.getpumfillageChartData().subscribe((data: any) => {
    this.series = data;
    data.forEach((element: any) => {
      if(element.name==="Yesterday Cycle Count"){
        this.surfaceCardpump.push(element)
      }
    });
    this.drawChart();
  })
 }
   
  series: any;
  chartSubscription: any;
  stockChart!: Highcharts.StockChart;
  drawChart(): void {
    new Highcharts.StockChart('line-chart', {
      chart: {
        renderTo: 'stock-chart'
      },
      rangeSelector : {
        enabled: false
    },
    navigator: {
        enabled: false
    },
    scrollbar: { enabled: false },
      yAxis: [{
        title: {
          text: 'Surface Card pump fill'
        }
      }, {
        title: {
          text: 'SPM Measured'
        }
      }, {
        opposite: false
      }],
      series: [{
        name: 'Surface Card pump fill',
        type: 'line',
        yAxis: 1,
        data: [[1629984600000,147.54],[1630071000000,148.6],[1630330200000,153.12],[1630416600000,151.83],[1630503000000,152.51],[1630589400000,153.65],[1630675800000,154.3],[1631021400000,156.69],[1631107800000,155.11],[1631194200000,154.07],[1631280600000,148.97],[1631539800000,149.55],[1631626200000,148.12],[1631712600000,149.03],[1631799000000,148.79],[1631885400000,146.06],[1632144600000,142.94],[1632231000000,143.43],[1632317400000,145.85],[1632403800000,146.83],[1632490200000,146.92],[1632749400000,145.37],[1632835800000,141.91],[1632922200000,142.83],[1633008600000,141.5],[1633095000000,142.65],[1633354200000,139.14],[1633440600000,141.11],[1633527000000,142],[1633613400000,143.29],[1633699800000,142.9],[1633959000000,142.81],[1634045400000,141.51],[1634131800000,140.91],[1634218200000,143.76],[1634304600000,144.84],[1634563800000,146.55],[1634650200000,148.76],[1634736600000,149.26],[1634823000000,149.48],[1634909400000,148.69],[1635168600000,148.64],[1635255000000,149.32],[1635341400000,148.85],[1635427800000,152.57],[1635514200000,149.8],[1635773400000,148.96],[1635859800000,150.02],[1635946200000,151.49],[1636032600000,150.96],[1636119000000,151.28],[1636381800000,150.44],[1636468200000,150.81],[1636554600000,147.92],[1636641000000,147.87],[1636727400000,149.99],[1636986600000,150],[1637073000000,151],[1637159400000,153.49],[1637245800000,157.87],[1637332200000,160.55],[1637591400000,161.02],[1637677800000,161.41],[1637764200000,161.94],[1637937000000,156.81],[1638196200000,160.24],[1638282600000,165.3],[1638369000000,164.77],[1638455400000,163.76],[1638541800000,161.84],[1638801000000,165.32],[1638887400000,171.18],[1638973800000,175.08],[1639060200000,174.56],[1639146600000,179.45],[1639405800000,175.74],[1639492200000,174.33],[1639578600000,179.3],[1639665000000,172.26],[1639751400000,171.14],[1640010600000,169.75],[1640097000000,172.99],[1640183400000,175.64],[1640269800000,176.28],[1640615400000,180.33],[1640701800000,179.29],[1640788200000,179.38],[1640874600000,178.2],[1640961000000,177.57],[1641220200000,182.01],[1641306600000,179.7],[1641393000000,174.92],[1641479400000,172],[1641565800000,172.17],[1641825000000,172.19],[1641911400000,175.08],[1641997800000,175.53],[1642084200000,172.19],[1642170600000,173.07],[1642516200000,169.8],[1642602600000,166.23],[1642689000000,164.51],[1642775400000,162.41],[1643034600000,161.62],[1643121000000,159.78],[1643207400000,159.69],[1643293800000,159.22],[1643380200000,170.33],[1643639400000,174.78],[1643725800000,174.61],[1643812200000,175.84],[1643898600000,172.9],[1643985000000,172.39],[1644244200000,171.66],[1644330600000,174.83],[1644417000000,176.28],[1644503400000,172.12],[1644589800000,168.64],[1644849000000,168.88],[1644935400000,172.79],[1645021800000,172.55],[1645108200000,168.88],[1645194600000,167.3],[1645540200000,164.32],[1645626600000,160.07],[1645713000000,162.74],[1645799400000,164.85],[1646058600000,165.12],[1646145000000,163.2],[1646231400000,166.56],[1646317800000,166.23],[1646404200000,163.17],[1646663400000,159.3],[1646749800000,157.44],[1646836200000,162.95],[1646922600000,158.52],[1647009000000,154.73],[1647264600000,150.62],[1647351000000,155.09],[1647437400000,159.59],[1647523800000,160.62],[1647610200000,163.98],[1647869400000,165.38],[1647955800000,168.82],[1648042200000,170.21],[1648128600000,174.07],[1648215000000,174.72],[1648474200000,175.6],[1648560600000,178.96],[1648647000000,177.77],[1648733400000,174.61],[1648819800000,174.31],[1649079000000,178.44],[1649165400000,175.06],[1649251800000,171.83],[1649338200000,172.14],[1649424600000,170.09],[1649683800000,165.75],[1649770200000,167.66],[1649856600000,170.4],[1649943000000,165.29],[1650288600000,165.07],[1650375000000,167.4],[1650461400000,167.23],[1650547800000,166.42],[1650634200000,161.79],[1650893400000,162.88],[1650979800000,156.8],[1651066200000,156.57],[1651152600000,163.64],[1651239000000,157.65],[1651498200000,157.96],[1651584600000,159.48],[1651671000000,166.02],[1651757400000,156.77],[1651843800000,157.28],[1652103000000,152.06],[1652189400000,154.51],[1652275800000,146.5],[1652362200000,142.56],[1652448600000,147.11],[1652707800000,145.54],[1652794200000,149.24],[1652880600000,140.82],[1652967000000,137.35],[1653053400000,137.59],[1653312600000,143.11],[1653399000000,140.36],[1653485400000,140.52],[1653571800000,143.78],[1653658200000,149.64],[1654003800000,148.84],[1654090200000,148.71],[1654176600000,151.21],[1654263000000,145.38],[1654522200000,146.14],[1654608600000,148.71],[1654695000000,147.96],[1654781400000,142.64],[1654867800000,137.13],[1655127000000,131.88],[1655213400000,132.76],[1655299800000,135.43],[1655386200000,130.06],[1655472600000,131.56],[1655818200000,135.87],[1655904600000,135.35],[1655991000000,138.27],[1656077400000,141.66],[1656336600000,141.66],[1656423000000,137.44],[1656509400000,139.23],[1656595800000,136.72],[1656682200000,138.93],[1657027800000,141.56],[1657114200000,142.92],[1657200600000,146.35],[1657287000000,147.04],[1657546200000,144.87],[1657632600000,145.86],[1657719000000,145.49],[1657805400000,148.47],[1657891800000,150.17],[1658151000000,147.07],[1658237400000,151],[1658323800000,153.04],[1658410200000,155.35],[1658496600000,154.09],[1658755800000,152.95],[1658842200000,151.6],[1658928600000,156.79],[1659015000000,157.35],[1659101400000,162.51],[1659360600000,161.51],[1659447000000,160.01],[1659533400000,166.13],[1659619800000,165.81],[1659706200000,165.35],[1659965400000,164.87],[1660051800000,164.92],[1660138200000,169.24],[1660224600000,168.49],[1660311000000,172.1],[1660570200000,173.19],[1660656600000,173.03],[1660743000000,174.55],[1660829400000,174.15],[1660915800000,171.52],[1661175000000,167.57],[1661261400000,167.23],[1661347800000,167.53],[1661434200000,170.03],[1661520600000,163.62],[1661779800000,161.38],[1661866200000,158.91],[1661952600000,157.22],[1662039000000,157.96],[1662125400000,155.81],[1662471000000,154.53],[1662557400000,155.96],[1662643800000,154.46],[1662730200000,157.37],[1662989400000,163.43],[1663075800000,153.84],[1663162200000,155.31],[1663248600000,152.37],[1663335000000,150.7],[1663594200000,154.48],[1663680600000,156.9],[1663767000000,153.72],[1663853400000,152.74],[1663939800000,150.43],[1664199000000,150.77],[1664285400000,151.76],[1664371800000,149.84],[1664458200000,142.48],[1664544600000,138.2],[1664803800000,142.45],[1664890200000,146.1],[1664976600000,146.4],[1665063000000,145.43],[1665149400000,140.09],[1665408600000,140.42],[1665495000000,138.98],[1665581400000,138.34],[1665667800000,142.99],[1665754200000,138.38],[1666013400000,142.41],[1666099800000,143.75],[1666186200000,143.86],[1666272600000,143.39],[1666359000000,147.27],[1666618200000,149.45],[1666704600000,152.34],[1666791000000,149.35],[1666877400000,144.8],[1666963800000,155.74],[1667223000000,153.34],[1667309400000,150.65],[1667395800000,145.03],[1667482200000,138.88],[1667568600000,138.38],[1667831400000,138.92],[1667917800000,139.5],[1668004200000,134.87],[1668090600000,146.87],[1668177000000,149.7],[1668436200000,148.28],[1668522600000,150.04],[1668609000000,148.79],[1668695400000,150.72],[1668781800000,151.29],[1669041000000,148.01],[1669127400000,150.18],[1669213800000,151.07],[1669386600000,148.11],[1669645800000,144.22],[1669732200000,141.17],[1669818600000,148.03],[1669905000000,148.31],[1669991400000,147.81],[1670250600000,146.63],[1670337000000,142.91],[1670423400000,140.94],[1670509800000,142.65],[1670596200000,142.16],[1670855400000,144.49],[1670941800000,145.47],[1671028200000,143.21],[1671114600000,136.5],[1671201000000,134.51],[1671460200000,132.37],[1671546600000,132.3],[1671633000000,135.45],[1671719400000,132.23],[1671805800000,131.86],[1672151400000,130.03],[1672237800000,126.04],[1672324200000,129.61],[1672410600000,129.93],[1672756200000,125.07],[1672842600000,126.36],[1672929000000,125.02],[1673015400000,129.62],[1673274600000,130.15],[1673361000000,130.73],[1673447400000,133.49],[1673533800000,133.41],[1673620200000,134.76],[1673965800000,135.94],[1674052200000,135.21],[1674138600000,135.27],[1674225000000,137.87],[1674484200000,141.11],[1674570600000,142.53],[1674657000000,141.86],[1674743400000,143.96],[1674829800000,145.93],[1675089000000,143],[1675175400000,144.29],[1675261800000,145.43],[1675348200000,150.82],[1675434600000,154.5],[1675693800000,151.73],[1675780200000,154.65],[1675866600000,151.92],[1675953000000,150.87],[1676039400000,151.01],[1676298600000,153.85],[1676385000000,153.2],[1676471400000,155.33],[1676557800000,153.71],[1676644200000,152.55],[1676989800000,148.48],[1677076200000,148.91],[1677162600000,149.4],[1677249000000,146.71],[1677508200000,147.92],[1677594600000,147.41],[1677681000000,145.31],[1677767400000,145.91],[1677853800000,151.03],[1678113000000,153.83],[1678199400000,151.6],[1678285800000,152.87],[1678372200000,150.59],[1678458600000,148.5],[1678714200000,150.47],[1678800600000,152.59],[1678887000000,152.99],[1678973400000,155.85],[1679059800000,155],[1679319000000,157.4],[1679405400000,159.28],[1679491800000,157.83],[1679578200000,158.93],[1679664600000,160.25],[1679923800000,158.28],[1680010200000,157.65],[1680096600000,160.77],[1680183000000,162.36],[1680269400000,164.9],[1680528600000,166.17],[1680615000000,165.63],[1680701400000,163.76],[1680787800000,164.66],[1681133400000,162.03],[1681219800000,160.8],[1681306200000,160.1],[1681392600000,165.56],[1681479000000,165.21],[1681738200000,165.23],[1681824600000,166.47],[1681911000000,167.63],[1681997400000,166.65],[1682083800000,165.02],[1682343000000,165.33],[1682429400000,163.77],[1682515800000,163.76],[1682602200000,168.41],[1682688600000,169.68],[1682947800000,169.59],[1683034200000,168.54],[1683120600000,167.45],[1683207000000,165.79],[1683293400000,173.57],[1683552600000,173.5],[1683639000000,171.77],[1683725400000,173.56],[1683811800000,173.75],[1683898200000,172.57],[1684157400000,172.07],[1684243800000,172.07],[1684330200000,172.69],[1684416600000,175.05],[1684503000000,175.16],[1684762200000,174.2],[1684848600000,171.56],[1684935000000,171.84],[1685021400000,172.99],[1685107800000,175.43],[1685453400000,177.3],[1685539800000,177.25],[1685626200000,180.09],[1685712600000,180.95],[1685971800000,179.58],[1686058200000,179.21],[1686144600000,177.82],[1686231000000,180.57],[1686317400000,180.96],[1686576600000,183.79],[1686663000000,183.31],[1686749400000,183.95],[1686835800000,186.01],[1686922200000,184.92],[1687267800000,185.01],[1687354200000,183.96],[1687440600000,187],[1687527000000,186.68],[1687786200000,185.27],[1687872600000,188.06],[1687959000000,189.25],[1688045400000,189.59],[1688131800000,193.97],[1688391000000,192.46],[1688563800000,191.33],[1688650200000,191.81],[1688736600000,190.68],[1688995800000,188.61],[1689082200000,188.08],[1689168600000,189.77],[1689255000000,190.54],[1689341400000,190.69],[1689600600000,193.99],[1689687000000,193.73],[1689773400000,195.1],[1689859800000,193.13],[1689946200000,191.94],[1690205400000,192.75],[1690291800000,193.62],[1690378200000,194.5],[1690464600000,193.22],[1690551000000,195.83],[1690810200000,196.45],[1690896600000,195.61],[1690983000000,192.58],[1691069400000,191.17],[1691155800000,181.99],[1691415000000,178.85],[1691501400000,179.8],[1691587800000,178.19],[1691674200000,177.97],[1691760600000,177.79],[1692019800000,179.46],[1692106200000,177.45],[1692192600000,176.57],[1692279000000,174],[1692365400000,174.49],[1692624600000,175.84],[1692711000000,177.23],[1692797400000,181.12],[1692883800000,176.38],[1692970200000,178.61]],
      }, {
        name: 'SPM Measured',
        type: 'line',
        yAxis: 2,
        data: [[1629984600000,147.54],[1630071000000,148.6],[1630330200000,153.12],[1630416600000,151.83],[1630503000000,-152.51],[1630589400000,153.65],[-1630675800000,-154.3],[-1631021400000,-156.69],[-1631107800000,-155.11],[1631194200000,-154.07],[1631280600000,148.97],[1631539800000,149.55],[1631626200000,148.12],[1631712600000,149.03],[1631799000000,148.79],[1631885400000,146.06],[1632144600000,142.94],[1632231000000,143.43],[1632317400000,145.85],[1632403800000,146.83],[1632490200000,146.92],[1632749400000,145.37],[1632835800000,141.91],[1632922200000,142.83],[1633008600000,141.5],[1633095000000,142.65],[1633354200000,139.14],[1633440600000,141.11],[1633527000000,142],[1633613400000,143.29],[1633699800000,142.9],[1633959000000,142.81],[1634045400000,141.51],[1634131800000,140.91],[1634218200000,143.76],[1634304600000,144.84],[1634563800000,146.55],[1634650200000,148.76],[1634736600000,149.26],[1634823000000,149.48],[1634909400000,148.69],[1635168600000,148.64],[1635255000000,149.32],[1635341400000,148.85],[1635427800000,152.57],[1635514200000,149.8],[1635773400000,148.96],[1635859800000,150.02],[1635946200000,151.49],[1636032600000,150.96],[1636119000000,151.28],[1636381800000,150.44],[1636468200000,150.81],[1636554600000,147.92],[1636641000000,147.87],[1636727400000,149.99],[1636986600000,150],[1637073000000,151],[1637159400000,153.49],[1637245800000,157.87],[1637332200000,160.55],[1637591400000,161.02],[1637677800000,161.41],[1637764200000,161.94],[1637937000000,156.81],[1638196200000,160.24],[1638282600000,165.3],[1638369000000,164.77],[1638455400000,163.76],[1638541800000,161.84],[1638801000000,165.32],[1638887400000,171.18],[1638973800000,175.08],[1639060200000,174.56],[1639146600000,179.45],[1639405800000,175.74],[1639492200000,174.33],[1639578600000,179.3],[1639665000000,172.26],[1639751400000,171.14],[1640010600000,169.75],[1640097000000,172.99],[1640183400000,175.64],[1640269800000,176.28],[1640615400000,180.33],[1640701800000,179.29],[1640788200000,179.38],[1640874600000,178.2],[1640961000000,177.57],[1641220200000,182.01],[1641306600000,179.7],[1641393000000,174.92],[1641479400000,172],[1641565800000,172.17],[1641825000000,172.19],[1641911400000,175.08],[1641997800000,175.53],[1642084200000,172.19],[1642170600000,173.07],[1642516200000,169.8],[1642602600000,166.23],[1642689000000,164.51],[1642775400000,162.41],[1643034600000,161.62],[1643121000000,159.78],[1643207400000,159.69],[1643293800000,159.22],[1643380200000,170.33],[1643639400000,174.78],[1643725800000,174.61],[1643812200000,175.84],[1643898600000,172.9],[1643985000000,172.39],[1644244200000,171.66],[1644330600000,174.83],[1644417000000,176.28],[1644503400000,172.12],[1644589800000,168.64],[1644849000000,168.88],[1644935400000,172.79],[1645021800000,172.55],[1645108200000,168.88],[1645194600000,167.3],[1645540200000,164.32],[1645626600000,160.07],[1645713000000,162.74],[1645799400000,164.85],[1646058600000,165.12],[1646145000000,163.2],[1646231400000,166.56],[1646317800000,166.23],[1646404200000,163.17],[1646663400000,159.3],[1646749800000,157.44],[1646836200000,162.95],[1646922600000,158.52],[1647009000000,154.73],[1647264600000,150.62],[1647351000000,155.09],[1647437400000,159.59],[1647523800000,160.62],[1647610200000,163.98],[1647869400000,165.38],[1647955800000,168.82],[1648042200000,170.21],[1648128600000,174.07],[1648215000000,174.72],[1648474200000,175.6],[1648560600000,178.96],[1648647000000,177.77],[1648733400000,174.61],[1648819800000,174.31],[1649079000000,178.44],[1649165400000,175.06],[1649251800000,171.83],[1649338200000,172.14],[1649424600000,170.09],[1649683800000,165.75],[1649770200000,167.66],[1649856600000,170.4],[1649943000000,165.29],[1650288600000,165.07],[1650375000000,167.4],[1650461400000,167.23],[1650547800000,166.42],[1650634200000,161.79],[1650893400000,162.88],[1650979800000,156.8],[1651066200000,156.57],[1651152600000,163.64],[1651239000000,157.65],[1651498200000,157.96],[1651584600000,159.48],[1651671000000,166.02],[1651757400000,156.77],[1651843800000,157.28],[1652103000000,152.06],[1652189400000,154.51],[1652275800000,146.5],[1652362200000,142.56],[1652448600000,147.11],[1652707800000,145.54],[1652794200000,149.24],[1652880600000,140.82],[1652967000000,137.35],[1653053400000,137.59],[1653312600000,143.11],[1653399000000,140.36],[1653485400000,140.52],[1653571800000,143.78],[1653658200000,149.64],[1654003800000,148.84],[1654090200000,148.71],[1654176600000,151.21],[1654263000000,145.38],[1654522200000,146.14],[1654608600000,148.71],[1654695000000,147.96],[1654781400000,142.64],[1654867800000,137.13],[1655127000000,131.88],[1655213400000,132.76],[1655299800000,135.43],[1655386200000,130.06],[1655472600000,131.56],[1655818200000,135.87],[1655904600000,135.35],[1655991000000,138.27],[1656077400000,141.66],[1656336600000,141.66],[1656423000000,137.44],[1656509400000,139.23],[1656595800000,136.72],[1656682200000,138.93],[1657027800000,141.56],[1657114200000,142.92],[1657200600000,146.35],[1657287000000,147.04],[1657546200000,144.87],[1657632600000,145.86],[1657719000000,145.49],[1657805400000,148.47],[1657891800000,150.17],[1658151000000,147.07],[1658237400000,151],[1658323800000,153.04],[1658410200000,155.35],[1658496600000,154.09],[1658755800000,152.95],[1658842200000,151.6],[1658928600000,156.79],[1659015000000,157.35],[1659101400000,162.51],[1659360600000,161.51],[1659447000000,160.01],[1659533400000,166.13],[1659619800000,165.81],[1659706200000,165.35],[1659965400000,164.87],[1660051800000,164.92],[1660138200000,169.24],[1660224600000,168.49],[1660311000000,172.1],[1660570200000,173.19],[1660656600000,173.03],[1660743000000,174.55],[1660829400000,174.15],[1660915800000,171.52],[1661175000000,167.57],[1661261400000,167.23],[1661347800000,167.53],[1661434200000,170.03],[1661520600000,163.62],[1661779800000,161.38],[1661866200000,158.91],[1661952600000,157.22],[1662039000000,157.96],[1662125400000,155.81],[1662471000000,154.53],[1662557400000,155.96],[1662643800000,154.46],[1662730200000,157.37],[1662989400000,163.43],[1663075800000,153.84],[1663162200000,155.31],[1663248600000,152.37],[1663335000000,150.7],[1663594200000,154.48],[1663680600000,156.9],[1663767000000,153.72],[1663853400000,152.74],[1663939800000,150.43],[1664199000000,150.77],[1664285400000,151.76],[1664371800000,149.84],[1664458200000,142.48],[1664544600000,138.2],[1664803800000,142.45],[1664890200000,146.1],[1664976600000,146.4],[1665063000000,145.43],[1665149400000,140.09],[1665408600000,140.42],[1665495000000,138.98],[1665581400000,138.34],[1665667800000,142.99],[1665754200000,138.38],[1666013400000,142.41],[1666099800000,143.75],[1666186200000,143.86],[1666272600000,143.39],[1666359000000,147.27],[1666618200000,149.45],[1666704600000,152.34],[1666791000000,149.35],[1666877400000,144.8],[1666963800000,155.74],[1667223000000,153.34],[1667309400000,150.65],[1667395800000,145.03],[1667482200000,138.88],[1667568600000,138.38],[1667831400000,138.92],[1667917800000,139.5],[1668004200000,134.87],[1668090600000,146.87],[1668177000000,149.7],[1668436200000,148.28],[1668522600000,150.04],[1668609000000,148.79],[1668695400000,150.72],[1668781800000,151.29],[1669041000000,148.01],[1669127400000,150.18],[1669213800000,151.07],[1669386600000,148.11],[1669645800000,144.22],[1669732200000,141.17],[1669818600000,148.03],[1669905000000,148.31],[1669991400000,147.81],[1670250600000,146.63],[1670337000000,142.91],[1670423400000,140.94],[1670509800000,142.65],[1670596200000,142.16],[1670855400000,144.49],[1670941800000,145.47],[1671028200000,143.21],[1671114600000,136.5],[1671201000000,134.51],[1671460200000,132.37],[1671546600000,132.3],[1671633000000,135.45],[1671719400000,132.23],[1671805800000,131.86],[1672151400000,130.03],[1672237800000,126.04],[1672324200000,129.61],[1672410600000,129.93],[1672756200000,125.07],[1672842600000,126.36],[1672929000000,125.02],[1673015400000,129.62],[1673274600000,130.15],[1673361000000,130.73],[1673447400000,133.49],[1673533800000,133.41],[1673620200000,134.76],[1673965800000,135.94],[1674052200000,135.21],[1674138600000,135.27],[1674225000000,137.87],[1674484200000,141.11],[1674570600000,142.53],[1674657000000,141.86],[1674743400000,143.96],[1674829800000,145.93],[1675089000000,143],[1675175400000,144.29],[1675261800000,145.43],[1675348200000,150.82],[1675434600000,154.5],[1675693800000,151.73],[1675780200000,154.65],[1675866600000,151.92],[1675953000000,150.87],[1676039400000,151.01],[1676298600000,153.85],[1676385000000,153.2],[1676471400000,155.33],[1676557800000,153.71],[1676644200000,152.55],[1676989800000,148.48],[1677076200000,148.91],[1677162600000,149.4],[1677249000000,146.71],[1677508200000,147.92],[1677594600000,147.41],[1677681000000,145.31],[1677767400000,145.91],[1677853800000,151.03],[1678113000000,153.83],[1678199400000,151.6],[1678285800000,152.87],[1678372200000,150.59],[1678458600000,148.5],[1678714200000,150.47],[1678800600000,152.59],[1678887000000,152.99],[1678973400000,155.85],[1679059800000,155],[1679319000000,157.4],[1679405400000,159.28],[1679491800000,157.83],[1679578200000,158.93],[1679664600000,160.25],[1679923800000,158.28],[1680010200000,157.65],[1680096600000,160.77],[1680183000000,162.36],[1680269400000,164.9],[1680528600000,166.17],[1680615000000,165.63],[1680701400000,163.76],[1680787800000,164.66],[1681133400000,162.03],[1681219800000,160.8],[1681306200000,160.1],[1681392600000,165.56],[1681479000000,165.21],[1681738200000,165.23],[1681824600000,166.47],[1681911000000,167.63],[1681997400000,166.65],[1682083800000,165.02],[1682343000000,165.33],[1682429400000,163.77],[1682515800000,163.76],[1682602200000,168.41],[1682688600000,169.68],[1682947800000,169.59],[1683034200000,168.54],[1683120600000,167.45],[1683207000000,165.79],[1683293400000,173.57],[1683552600000,173.5],[1683639000000,171.77],[1683725400000,173.56],[1683811800000,173.75],[1683898200000,172.57],[1684157400000,172.07],[1684243800000,172.07],[1684330200000,172.69],[1684416600000,175.05],[1684503000000,175.16],[1684762200000,174.2],[1684848600000,171.56],[1684935000000,171.84],[1685021400000,172.99],[1685107800000,175.43],[1685453400000,177.3],[1685539800000,177.25],[1685626200000,180.09],[1685712600000,180.95],[1685971800000,179.58],[1686058200000,179.21],[1686144600000,177.82],[1686231000000,180.57],[1686317400000,180.96],[1686576600000,183.79],[1686663000000,183.31],[1686749400000,183.95],[1686835800000,186.01],[1686922200000,184.92],[1687267800000,185.01],[1687354200000,183.96],[1687440600000,187],[1687527000000,186.68],[1687786200000,185.27],[1687872600000,188.06],[1687959000000,189.25],[1688045400000,189.59],[1688131800000,193.97],[1688391000000,192.46],[1688563800000,191.33],[1688650200000,191.81],[1688736600000,190.68],[1688995800000,188.61],[1689082200000,188.08],[1689168600000,189.77],[1689255000000,190.54],[1689341400000,190.69],[1689600600000,193.99],[1689687000000,193.73],[1689773400000,195.1],[1689859800000,193.13],[1689946200000,191.94],[1690205400000,192.75],[1690291800000,193.62],[1690378200000,194.5],[1690464600000,193.22],[1690551000000,195.83],[1690810200000,196.45],[1690896600000,195.61],[1690983000000,192.58],[1691069400000,191.17],[1691155800000,181.99],[1691415000000,178.85],[1691501400000,179.8],[1691587800000,178.19],[1691674200000,177.97],[1691760600000,177.79],[1692019800000,179.46],[1692106200000,177.45],[1692192600000,176.57],[1692279000000,174],[1692365400000,174.49],[1692624600000,175.84],[1692711000000,177.23],[1692797400000,181.12],[1692883800000,176.38],[1692970200000,178.61]],
      }]
    } as any);
   }
}

