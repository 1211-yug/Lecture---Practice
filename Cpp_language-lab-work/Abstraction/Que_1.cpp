#include<iostream>

using namespace std;

class Admin{

    public:

        string company_name;
        double manager_salary;
        double employee_salary;
        int total_staff;
        double total_annual_revenue;
        bool can_terminate;


        Admin(string cname, double ms, double es, int staff, double revenue, bool terminate){
            company_name = cname;
            manager_salary = ms;
            employee_salary = es;
            total_staff = staff;
            total_annual_revenue = revenue;
            can_terminate = terminate;
        }

        virtual void displayinfo(){
            cout << "=============================================" << endl;
            cout << "Company Name :- " << company_name << endl;
            cout << "Manager Salary :- " << manager_salary << endl;
            cout << "Employee Salary :- " << employee_salary << endl;
            cout << "Total Staff :- " << total_staff << endl;  
            cout << "Total Annual Revenue :- " << total_annual_revenue << endl;
            cout << "Can Terminate :- " << (can_terminate ? "true" : "false") << endl;
            cout << "=============================================" << endl;
        }

        


};

class Manager : public Admin{

    public:

        Manager(string cname, double ms, double es, int staff, double revenue, bool terminate) : Admin(cname, ms, es, staff, revenue, terminate){ }

        void displayinfo(){
            cout << "=============================================" << endl;
            cout << "Company Name :- " << company_name << endl;
            cout << "Manager Salary :- " << manager_salary << endl;
            cout << "Employee Salary :- " << employee_salary << endl;
            cout << "Total Staff :- " << total_staff << endl;  
            cout << "Total Annual Revenue :- " << total_annual_revenue << endl;
            cout << "Can Terminate :- " << (can_terminate ? "true" : "false") << endl;
            cout << "=============================================" << endl;
        }


};

class Employee : public Manager{
    
    public:

        Employee(string cname, double ms, double es, int staff, double revenue, bool terminate) : Manager(cname, ms, es, staff, revenue, terminate) {}

        void displayinfo(){
                cout << "=============================================" << endl;
                cout << "Company Name :- " << company_name << endl;
                cout << "Manager Salary :- " << manager_salary << endl;
                cout << "Employee Salary :- " << employee_salary << endl;
                cout << "Total Staff :- " << total_staff << endl;  
                cout << "Total Annual Revenue :- " << total_annual_revenue << endl;
                cout << "Can Terminate :- " << (can_terminate ? "true" : "false") << endl;
                cout << "=============================================" << endl;
            }


};

int main(){

    Admin *obj;

    obj = new Employee("TCS", 2000, 3000 , 100, 80000, true);
    obj->displayinfo();

    cout << endl;

    obj = new Manager("TCS", 80000, 30000, 100, 50000, true);
    obj->displayinfo();
    
    return 0;
}