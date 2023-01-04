import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscriber } from 'rxjs';
import { AppComponent } from './app.component';
import { WelcomedataService } from './service/data/welcomedata.service';

@Component({
    selector: 'welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

    errorMessageLog =''
    name: string = ''
    name2=''
    //Inject activated route
    constructor(private route: ActivatedRoute,
        private service: WelcomedataService
    ) {

    }
    ngOnInit() {
        // console.log(this.route.snapshot.params['name'])
        this.name = this.route.snapshot.params['name']
    }

    // getWelcome() {
    //     // console.log("Hello and welcome");
    //     console.log(this.service.executeWelcomebean().subscribe(
    //         // response =>this.handleSuccesfulResponse(response)
            
    //         // response => console.log(response.message)
    //         error => this.handleErrorResponse(error)
            
    //     ));

        // console.log("This is Also a wecome msg")
    // }

    // handleSuccesfulResponse(response) {
    // //    console.log(response);
    // this.errorMessageLog = response
    // }   

    handleErrorResponse(error){
        console.log(error.message)
        // // console.log(error.error)
        // console.log(error.error.message)
        this.errorMessageLog = error.message
    
    }


    executeWelcomePathVariable()
    {
        this.service.executeWelcomePathVariable(this.name2).subscribe(
            error => this.handleErrorResponse(error)
            
        )
    }

}


