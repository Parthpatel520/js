disp();
document.getElementById("btn").addEventListener("click", () => {
    let name = document.studata.stuname.value;
    let gender = document.studata.g1.value;
    let course = document.studata.stucourse.value;
    let instName = document.studata.stuinstitute.value;
    let hide = document.studata.uid.value;
    let qualification = document.getElementsByName('q1');
    let q1=[];
    for (let i = 0; i < qualification.length; i++) {
        if (qualification[i].checked==true) {
            q1.push(qualification[i].value);
        }
        
    }

    let get = JSON.parse(localStorage.getItem("stud-info"))
    let data = {};
    let str = {
        studid: 1,
        Name: name,
        Gender: gender,
        Course: course,
        InstituteName: instName,
        Qualification:q1
    }
    if (get != null) {
        
        let len = get.student.length;
        str = {
            studid: len+1,
            Name: name,
            Gender: gender,
            Course: course,
            InstituteName: instName,
            Qualification:q1
        }
        get.student.push(str);
        data=get;
        localStorage.setItem("stud-info",JSON.stringify(data));
    }else{
        data.student=[str];
        localStorage.setItem("stud-info",JSON.stringify(data));
    }
    document.studata.reset();
    disp();

});

 function disp(){
    let tr="";
    let p1 = JSON.parse(localStorage.getItem("stud-info"));
    if (p1!=null) {
        tr+="<tr>";
        tr+="<th>Studid</th>"
        tr+="<th>Name</th>"
        tr+="<th>Gender</th>"
        tr+="<th>Course</th>"
        tr+="<th>InstituteName</th>"
        tr+="<th>Qualification</th>"
        tr+="<th>Action</th>"
        for (let i = 0; i < p1.student.length; i++) {
            tr+="<tr>";
            tr+="<td>"+p1.student[i].studid+"</td>"
            tr+="<td>"+p1.student[i].Name+"</td>"
            tr+="<td>"+p1.student[i].Gender+"</td>"
            tr+="<td>"+p1.student[i].Course+"</td>"
            tr+="<td>"+p1.student[i].InstituteName+"</td>"
            tr+="<td>"+p1.student[i].Qualification+"</td>"    
            tr+="<td> <input type='button' id='delete'name='delete'value='Delete'onclick='deldata("+p1.student[i].id+")'></td>"    
            tr+="<td><input type='button' id='edit'name='edit'value='Edit'onclick='editdata("+p1.student[i].id+")'></td>"    
        }
    }
        document.getElementById("disptab").innerHTML=tr;
        
    }

    function deldata(id){
        let p1 = JSON.parse(localStorage.getItem("stud-info"));
        if(p1!=null){
            p1.student.splice(id,1);
            localStorage.setItem("stud-info",JSON.stringify(p1));
            disp();
        }
    }

    function editdata(id){
        let p1 = JSON.parse(localStorage.getItem("stud-info"));
        if(p1!= null){
            for (let i = 0; i < p1.student.length; i++) {
                if (id==p1.student[i].id) {
                    document.studata.stuname.value=p1.student[i].id
                    document.studata.g1.value=p1.student[i].Gender
                    document.studata.stucourse.value=p1.student[i].Course
                    document.studata.stuinstitute.value=p1.student[i].InstituteName
                }
                document.studata.uid.value;
            }
        }
    }