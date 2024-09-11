import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { checkskill, emailcheck, usernamecheck,checkpwd } from 'src/app/shared/customvalidationfun';
import { EmpserviceService } from 'src/app/shared/empservice.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  employeeForm:FormGroup
  constructor(private fb:FormBuilder,private _emp:EmpserviceService) { }
  ngOnInit(): void {
  
    // this.employeeForm=new FormGroup({
    //   fullName:new FormControl('',[Validators.required,Validators.minLength(2),Validators.maxLength(10),usernamecheck]),
    //   Email:new FormControl('',Validators.required),
    //   skills:new FormGroup({
    //     skillName:new FormControl(),
    //     exp:new FormControl(),
    //     proficiency:new FormControl()
    //   })
    // })

    this.employeeForm=this.fb.group({
      fullName:['',[Validators.required,Validators.minLength(2),Validators.maxLength(10),usernamecheck]],
      Email:['',[Validators.required,emailcheck]],
      pwd:[''],
      cpwd:[''],
      skills:this.fb.array([this.AddSkillFormGroup()])
    },{validator:checkpwd})

// const fa=new FormArray([
//   new FormControl(''),
//   new FormGroup({
//     country:new FormControl()
//   }),
//   new FormControl('Happy'),
//   new FormArray([])
// ])

// console.log(fa.controls)
// fa.push(new FormControl())
// console.log(fa.controls)
// console.log(fa.at(2).value)

// const fa1=this.fb.array([])

}

    get getfullName(){ return this.employeeForm.get('fullName')}
    get getEmail() { return this.employeeForm.get('Email')}
    get getSkill(){ return this.employeeForm.get('skills') as FormArray}
    AddSkillFormGroup():FormGroup{
      return this.fb.group({
        skillName:['',checkskill(/^[a-zA-Z]+$/)],
        exp:['',checkskill(/^[0-9]+$/)],
        proficiency:['']
      })
    }
  
    AddSkills(){
      this.getSkill.push(this.AddSkillFormGroup())
    }
    RemoveSkill(i:number){
      this.getSkill.removeAt(i)
    }
  AddResume(){
    // console.log(this.employeeForm.value)
    this._emp.postResume(this.employeeForm.value).subscribe({
      next:(res)=>console.log("data submitted",res)
    })
  }
  loadData(){
    // this.employeeForm.setValue({
    //   fullName:'Smith',
    //   Email:'smith@gmail.com',
    //   skills:{
    //     skillName:'Angular',
    //      exp:10,
    //     proficiency:'beginner'
    //   }
    // })

    this.employeeForm.patchValue({
      fullName:'Smith',
      Email:'smith@gmail.com',
      skills:{
        skillName:'Angular',
        //  exp:10,
        proficiency:'beginner'
      }
    })

  }


  
}
