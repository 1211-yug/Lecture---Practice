#include<iostream>

using namespace std;

class Customer{
	
	private:
		
		int id,age,mobnum,simval;
		string name,city,tebrna;
		
	public:
	
		void Cust_id(int id){
			this->id = id;
		}
		
		void Cust_age(int age){
			this->age = age;
		}
		
		void Cust_mobnum(int mobnum){
			this->mobnum = mobnum;
		}
		
		void Cust_simval(int simval){
			this->simval = simval;
		}
		
		void Cust_name(string name){
			this->name = name;
		}
			
		void Cust_city(string city){
			this->city = city;
		}
		
		void Cust_tebrna(string tebrna){
			this->tebrna = tebrna;
		}

		void Print_cust_info(){
			
			cout << "Cust_id :- " << id << endl;
			cout << "Cust_name :- " << name << endl;
			cout << "Cust_age :- " << age << endl;
			cout << "Cust_city :- " << city << endl;
			cout << "Cust_mobile_number :- " << mobnum << endl;
			cout << "Cust_simcard_validity(in years) :- " << simval << endl;
			cout << "Cust_telecom_brand_name(like Jio, Airtel, Vi, etc.) :- " << tebrna << endl;
			
			cout << "---------------------------------------------------------------" << endl;
			
		}

};

int main(){
	
	Customer c1,c2,c3,c4,c5;
	
	c1.Cust_id(1);
	c1.Cust_name("Dhaval");
	c1.Cust_age(20);
	c1.Cust_city("surat");
	c1.Cust_mobnum(1234567890);
	c1.Cust_simval(2021);
	c1.Cust_tebrna("Jio");
	c1.Print_cust_info();
	
	c2.Cust_id(2);
	c2.Cust_name("Jethalal");
	c2.Cust_age(49);
	c2.Cust_city("Mumbai");
	c2.Cust_mobnum(1234567890);
	c2.Cust_simval(2017);
	c2.Cust_tebrna("Jio");
	c2.Print_cust_info();
	
	c3.Cust_id(3);
	c3.Cust_name("Rajat");
	c3.Cust_age(30);
	c3.Cust_city("Hariyana");
	c3.Cust_mobnum(1234567890);
	c3.Cust_simval(2020);
	c3.Cust_tebrna("Vi");
	c3.Print_cust_info();

	c4.Cust_id(4);
	c4.Cust_name("Faizu");
	c4.Cust_age(26);
	c4.Cust_city("Mumbai");
	c4.Cust_mobnum(1234567890);
	c4.Cust_simval(2011);
	c4.Cust_tebrna("Jio");
	c4.Print_cust_info();
	
	c5.Cust_id(5);
	c5.Cust_name("Janat");
	c5.Cust_age(24);
	c5.Cust_city("Mumbai");
	c5.Cust_mobnum(1234567890);
	c5.Cust_simval(2010);
	c5.Cust_tebrna("Jio");
	c5.Print_cust_info();
	
	return 0;
}
