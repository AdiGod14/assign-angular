import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { NgxEchartsModule } from 'ngx-echarts';
import { EChartsOption } from 'echarts';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-visuals',
  standalone: true,
  imports: [CommonModule, NgFor, NgxEchartsModule, FormsModule],
  templateUrl: './visuals.component.html',
  styleUrl: './visuals.component.css'
})
export class VisualsComponent implements OnInit {

  
  prices: any[] = [];
  chartOption: EChartsOption = {};
  showDialog = true;
  selectedOption: 'line' | 'bar' | 'scatter' = 'line'; 
  Options = ['line', 'bar', 'scatter'];

  constructor(private priceService: DataService) { }

  ngOnInit() {
    
    this.showDialog = true;
      //getting data from the data service
      this.priceService.getPrices().subscribe((data: any[]) => {
      this.prices = data;
      this.updateChart(); 
    });
  }
  closeDialog() {
    //toggling dialog box
    this.showDialog = false;
  }


  updateChart() {
    this.chartOption = {
      color: 'green',
      tooltip: {
        trigger: 'axis', 
        axisPointer: {
          type: 'line' 
        },
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 1,
        textStyle: {
          color: '#000',
          fontSize: 12
        },
        formatter: (params: any) => {
          if (Array.isArray(params)) {
           
            return params.map(p => `${p.seriesName}: ₹${p.data}`).join('<br>');
          } else {
            
            return `${params.seriesName}<br>${params.name}: ₹${params.data}`;
          }
        }
      },
      xAxis: {
        type: 'category',
        name: 'Year ',
        nameGap: 30,
        nameLocation: 'middle',
        data: this.prices.map(p => p.name)
      },
      yAxis: {
        type: 'value',
        name: 'Price of Eggs per Dozen (₹)',
        nameLocation: 'middle',
        nameGap: 30,
        nameRotate: 90
      },
      series: [
        {
          name: 'Egg Price',
          type: this.selectedOption as 'line' | 'bar' | 'scatter',
          data: this.prices.map(p => p.price)
        }
      ]
    };
  }
}

