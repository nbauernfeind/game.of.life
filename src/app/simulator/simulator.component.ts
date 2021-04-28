import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulator',
  templateUrl: './simulator.component.html',
  styleUrls: ['./simulator.component.css']
})
export class SimulatorComponent implements OnInit {
  
  numRows: number = 70;
  numCols: number = 80;
  
  grid: boolean[][];
  
  hi: number = -1;
  hj: number = -1;
  onHover(i: number, j: number) {
    this.hi = i;
    this.hj = j;
  }

  constructor() {
    this.grid = new Array<boolean[]>(this.numRows);
    for (var i=0; i < this.grid.length; i++) {
      this.grid[i] = new Array<boolean>(this.numCols);
      for (var j=0; j < this.grid[i].length; j++) {
        this.grid[i][j] = Math.random() < 0.2;
      }
    }
  }
  
  runOneStep(){
    let newGrid = new Array<boolean[]>(this.numRows);
    for (let i = 0; i < this.grid.length; i++) {
      newGrid[i] = new Array<boolean>(this.numCols);
      for (let j = 0; j < this.grid[i].length; j++) {
        let n = this.numNeighbors(i, j);
        newGrid[i][j] = false;
        if ( n == 3 ) {
          newGrid[i][j] = true;  
        }
        if ( this.grid[i][j] && (n == 2 || n == 3 )) {
          newGrid[i][j] = true;
        }
      } 
    }
    this.grid = newGrid
  }
  Start(){
    let newGrid = new Array<boolean[]>(this.numRows);
     for (var i=0; i < this.grid.length ; i++) {
       newGrid[i] = new Array<boolean>(this.numCols);
      for (var j=0; j < this.grid[i].length; j++) {
         newGrid[i][j] = Math.random() < 0.2;
       }
     }
    this.grid = newGrid;
    
   }

  isAlive(i: number, j: number): boolean {
    if (i < 0 || i >= this.numRows || j < 0 || j >= this.numCols) {
      return false;
    }
    return this.grid[i][j];
  }

  numNeighbors(i: number , j: number): number{
    let n = 0;
    for (let di = -1; di < 2; ++di){
      for (let dj = -1; dj < 2; ++dj){
        if ((di != 0 || dj != 0) && this.isAlive(i + di, j + dj)) {
                ++n;
        }
      }
    }
          return n;
  }

  clear(){

  }
  
  ngOnInit(): void {
  }

  toggleCell(i: number, j: number): void {
    this.grid[i][j] = !this.grid[i][j]
  }
}
