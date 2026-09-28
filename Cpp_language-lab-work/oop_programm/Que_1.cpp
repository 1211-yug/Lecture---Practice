#include<iostream>

using namespace std;

class Employee{
	
	private:
		int id,age,sal,exp;
		string name,role,city,comname;
		 
	public:
		
		void empId(int i){
			id = i;
		}	
		
		void empAge(int a){
			age = a;
		}	
		
		void empSal(int s){
			sal = s;
		}	
		
		void empExp(int e){
			exp = e;
		}	
		
		void empName(string n){
			name = n;
		}	
		
		void empRole(string r){
			role = r;
		}	
		
		void empCity(string c){
			city = c;
		}	
		
		void empComname(string cn){
			comname = cn;
		}
		
		void display(){
	        cout << "Emp_ID :- " << id << endl;
	        cout << "Emp_Name :- " << name << endl;
	        cout << "Emp_Age :- " << age << endl;
	        cout << "Emp_Role :- " << role << endl;
	        cout << "Emp_Salary :- " << sal << endl;
	        cout << "Emp_City :- " << city << endl;
	        cout << "Emp_Experience :- " << exp << endl;
	        cout << "Emp_Company_name :- " << comname << endl;
	        cout << "------------------------" << endl;
    	}
		
};


int main(){
	
	Employee e1,e2,e3,e4,e5;
	
	e1.empId(1);
    e1.empName("Arachit");
    e1.empAge(20);
    e1.empRole("Developer");
    e1.empSal(30000);
    e1.empCity("Surat");
    e1.empExp(2);
    e1.empComname("Dev c++");
    e1.display();
    
	e2.empId(2);
    e2.empName("Meet");
    e2.empAge(21);
    e2.empRole("Developer");
    e2.empSal(40000);
    e2.empCity("Surat");
    e2.empExp(1);
    e2.empComname("Red & white");
    e2.display();
    
	e3.empId(3);
    e3.empName("Tushar");
    e3.empAge(19);
    e3.empRole("Designer");
    e3.empSal(30000);
    e3.empCity("Ahemdabad");
    e3.empExp(2);
    e3.empComname("TD");
    e3.display();
    
	e4.empId(4);
    e4.empName("Arachit");
    e4.empAge(20);
    e4.empRole("Developer");
    e4.empSal(30000);
    e4.empCity("Surat");
    e4.empExp(2);
    e4.empComname("Dev c++");
    e4.display();
	
	e5.empId(5);
    e5.empName("Arachit");
    e5.empAge(20);
    e5.empRole("Developer");
    e5.empSal(30000);
    e5.empCity("Surat");
    e5.empExp(2);
    e5.empComname("Dev c++");
    e5.display();
	
	return 0;
}