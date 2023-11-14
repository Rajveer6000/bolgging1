import { Component, Input } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rajveer1';
  constructor(private service: SharedService) { }
  notes: any = [];
  refreshNotes() {
    this.service.getNotes().subscribe((res) => {
      this.notes = res
      console.log(this.notes);
    })
  }
  ngOnInit() {
    this.refreshNotes();
  }
  addNotes(newNotes: string) {
    if (newNotes.trim() == "") { alert("string is emptty") }
    else {
      (document.getElementById("heyy") as HTMLInputElement).value = "";
      this.service.addNotes(newNotes).then((res) => {
        this.refreshNotes();
      })
    }
  }
  deleteNotes(id: string) {
    this.service.deletNotes(id).then((res) => {
      // console.log(res);
      this.refreshNotes()
    })
  }
}
