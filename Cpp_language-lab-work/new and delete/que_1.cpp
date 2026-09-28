#include<iostream>

using namespace std;

class Employee{
	
	public:
		
		int employee_id, age;
		float salary;
		string  name;
		
		int getID(){
			
        	return employee_id;
        	
    	}			
		
		void getters(int id, string n, int a, float s){
			
			employee_id = id;
			name = n;
			age = a;
			salary = s;
			
		}
		
		void setters(int id, string n, int a, float s){
			
			employee_id = id;
			name = n;
			age = a;
			salary = s;
			
		}
		
		void display(){
			
			cout << "=====================" << endl; 
			cout << "Employee Id :- " << employee_id << endl;
			cout << "Name :- " << name << endl;
			cout << "Age :- " << age << endl;
			cout << "Salary :- " << salary << endl;
			cout << "=====================" << endl << endl; 
		
			
		}
		
};

class FullTimeEmployee : public Employee{
		
	float bonus;
	
	public:
		
		void setBonus(float b){
			
			bonus = b;
			
		}
		
		void display(){
		
			Employee::display();
			cout << "Bonus :- " << bonus << endl;
			cout << "=====================" << endl; 
		
		}

};

class PartTimeEmployee : public Employee{
	
	int hours_worked;
	
	public:
		
		void setHours(int hw){
			
			hours_worked = hw;
			
		}
		
		void display(){
			
			Employee::display();
			cout << "Hours Worked :- " << hours_worked << endl;
			cout << "=====================" << endl; 
			
		}
	
};

int main(){
	
	Employee *emp[10];
	int count = 0;
	int choice;
	
	do{
			cout << "============================" << endl;
			cout << "| 1.Add Full Time Employee |" << endl;
			cout << "| 2.Add Part Time Employee |" << endl;
			cout << "| 3.Display Employees      |" << endl;
			cout << "| 4.Delete Employee        |" << endl;
			cout << "| 5.Exit                   |" << endl;
			cout << "============================" << endl << endl;
			
			cout << "Enter your choice :- ";
			cin >> choice;
			
			cout << endl;
			
		switch(choice){
			
			case 1:{

				FullTimeEmployee *f = new FullTimeEmployee();
				int id,age;
				float salary,bonus;
				string name;
				
				cout << "=====================" << endl; 
				
				cout << "Enter Id :- ";
				cin >> id;
				
				cout << "Enter Name :- ";
				cin >> name;
				
				cout << "Enter Age :- ";
				cin >> age;
				
				cout << "Enter Salary :- ";
				cin >> salary;
				
				cout << "Enter Bonus :- ";
				cin >> bonus;
				
				cout << "=====================" << endl;
				cout << endl;
				
				f->setters(id,name,age,salary);
            	f->setBonus(bonus);
            	
				emp [count++] = f;
            	
            	break;
			
			}
				
			case 2:{
				
				PartTimeEmployee *p = new PartTimeEmployee();
				int id, age, hours;
	            float salary;
	            string name;
	            
	            cout << "=====================" << endl; 
	
	            cout << "Enter ID :- ";
	            cin >> id;
	            
	            cout << "Enter Name :- ";
	            cin >> name;
	            
	            cout << "Enter Age :- ";
	            cin >> age;
	            
	            cout << "Enter Salary :- ";
	            cin >> salary;
	            
	            cout << "Enter Hours Worked :- ";
	            cin >> hours;
				
				cout << "=====================" << endl;
				cout << endl;	
			
				p->getters(id,name,age,salary);
				p->setHours(hours);
				
				emp [count++] = p;
				
            	break;
			
			}
            
            case 3:{
            	
            	for(int i=0 ; i<count ; i++){
            		
					emp[i]->display();
				
				}
            
				break;
			
			}
			
			case 4:{
				
				int id;
				bool found = false;
				
				cout << "Enter Delete Employee Id :- ";
				cin >> id;
				
				for(int i=0 ; i<count ; i++){
					
					if(emp[i]->getID()== id){
						
						delete emp[i];
					
						for(int j=i ; j<count-1 ; j++){
							
							emp[j] = emp[j+1];
									
						}

						found = true;

						count--;
						cout << "-------------------" << endl;
						cout << "Employee Deleted" << endl;
						cout << "-------------------" << endl;
					}
				}

				if(!found){
					cout << "-------------------" << endl;
					cout << "Employee Not Found" << endl;
					cout << "-------------------" << endl;
					break;

				}
					
				break;
			}	
            	
            case 5:{
            	
        		cout << "------------------------" << endl;
            	cout << "Exit the programm.... " << endl;
        		cout << "------------------------" << endl;
            	break;	
			
			} 
            	
            default:{
        		
        		cout << "----------------------------" << endl;
				cout << "Invalid choice! Try again." << endl;
        		cout << "----------------------------" << endl;
				break;
			
			}
            
		}
		
	}while(choice != 5);
	
	return 0;
}
