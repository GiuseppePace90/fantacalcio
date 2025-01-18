import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../api.service';
import { AgGridAngular } from "@ag-grid-community/angular";
import "@ag-grid-community/styles/ag-grid.css";
import "@ag-grid-community/styles/ag-theme-quartz.css";
import { ColDef, ColGroupDef , RowSelectionOptions, ModuleRegistry } from "@ag-grid-community/core";
import { MatTabsModule } from '@angular/material/tabs';
import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";



ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'app-listone',
  standalone: true,
  imports: [CommonModule, AgGridAngular, MatTabsModule],
  templateUrl: './listone.component.html',
  styleUrls: ['./listone.component.css']
})
export class ListoneComponent {

  themeClass =
        "ag-theme-quartz";

  messageServer: any = "";
  public rowData: Array<any> = [];
  public rowDataFanta1: Array<any> = [];
  public rowDataFanta2: Array<any> = [];
  listaVoti: Array<any> = [];
  backUpVoti: Array<any> = [];
  public rowSelection: RowSelectionOptions | "single" | "multiple" = {
    mode: "multiRow",
  };

  /*public columnDefs: (ColDef | ColGroupDef)[] = [
    { field: "nome", flex: 2},
    { field: "rc", flex: 1 },
    { field: "rm", flex: 1 },
    { field: "squadra", flex: 2 },
    { field: "quotazione", flex: 1 },
    { field: "mv", flex: 1 },
    { field: "mfv", flex: 1 },
    { field: "presenze", flex: 1 }
 ];*/

 public columnDefs: (ColDef | ColGroupDef)[] = [
  { field: "ruolo", flex: 1},
  { field: "nome", flex: 2 },
  { field: "fantaVoto", flex: 1 },
  { field: "voto", flex: 1 },
  { field: "golFatto", flex: 1 },
  { field: "golSubito", flex: 1 },
  { field: "rigoreFatto", flex: 1 },
  { field: "rigoreParato", flex: 1 },
  { field: "rigoreSbagliato", flex: 1 },
  { field: "autoGol", flex: 1 },
  { field: "assist", flex: 1 },
  { field: "ammonito", flex: 1 },
  { field: "espulso", flex: 1 }
];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getMessageHome().subscribe({
      next: (data: any) => this.messageServer = data,
      error: (e) => console.log("Si è verificato un errore: ", e)
    });
    this.apiService.getVoti().subscribe({
      next: (data: any) => {
        this.listaVoti = this.backUpVoti = data;
        for (let i = 0; i < data.length; i++) {
          data[i].fantaVoto = this.fantaVoto(data[i].ruolo, data[i].voto, data[i].golFatto, data[i].golSubito, data[i].rigoreFatto, data[i].rigoreParato, data[i].rigoreSbagliato, data[i].autoGol, data[i].assist, data[i].ammonito, data[i].espulso);
          this.rowData = data.map((item: any) => this.objectBuilder(item));
          this.rowDataFanta1 = this.filterFanta1(data);
        }
      },
      error: (e) => console.log("Si è verificato un errore: ", e)
    })
    this.apiService.wsConnect();
  };

  filterFanta1(data :any) {
    let team :string[] = ["Meret", "Milinkovic-Savic V.", "Caprile", "Di Lorenzo", "Mancini", "Viti", "Vasquez", "Pezzella Giu.", "Giannetti", "Cabal", "Savona", "Balogh", "Ehizibue", "Zambo Anguissa", "Duda", "Colpani", "Baldanzi", "Ruggeri", "Gyasi", "Badelj", "Ilic", "Neres", "Fazzini", "Kvaratskhelia", "Lookman", "Thuram", "Adams C.", "Mosquera", "Vitinha O."];
    return data.filter((item :any) => team.includes(item.nome));

  }

  downloadFunction() {
    this.apiService.downloadFile().subscribe({
      next: (data: any) => {
        //data.pop();
        for (let i = 0; i < data.length; i++) {
          this.rowData = data.map((item: any) => this.objectBuilder(item));
        }
        /*let fileName: string = 'voti.json';
        const blob = new Blob([data], { type: 'application/json'});
        let element = document.createElement('a');
        element.href = window.URL.createObjectURL(blob);
        element.download = fileName;
        element.click();*/
      },
      error: (e) => console.log("Si è verificato un errore: ", e)
    });
  };

  objectBuilder(item : any) {
    //let ar = array[0];
    return {
      ruolo: item.ruolo,
      nome: item.nome,
      fantaVoto: item.fantaVoto,
      voto: item.voto,
      golFatto: item.golFatto,
      golSubito: item.golSubito,
      rigoreFatto: item.rigoreFatto,
      rigoreParato: item.rigoreParato,
      rigoreSbagliato: item.rigoreSbagliato,
      autoGol: item.autoGol,
      assist: item.assist,
      ammonito: item.ammonito,
      espulso: item.espulso
    }
    /*return {
      nome: ar[1],
      rc: ar[3],
      rm: ar[4],
      squadra: ar[9],
      quotazione: ar[5],
      mv: ar[17],
      mfv: ar[18],
      presenze: ar[19]
    }*/
  }

  converter(...args :string[]) :number[] {
    return args.map((a :string) => parseFloat(a));
  }

  fantaVoto(r :string, ...args : string[]) {
    let array = this.converter(...args);

    if(r === "P") {
      return array[0]-(array[2])+(array[4]*3)-(array[6]*2)+array[7]-(0.5*array[8])-array[9];
    } else {
      return array[0]+(array[1]*3)+(array[3]*3)-(array[5]*3)-(array[6]*2)+array[7]-(0.5*array[8])-array[9];
    }
  }

}
