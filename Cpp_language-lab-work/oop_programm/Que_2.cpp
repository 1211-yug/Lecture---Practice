#include<iostream>

using namespace std;

class Car{
	
	private:
		int id,reyear; 
		string comname,color,model;
			
	public:
		
		void carId(int i){
			id = i;
		}
		
		void carReyear(int ry){
			reyear = ry;
		}
		
		void carComname(string cn){
			comname = cn;
		}
		
		void carColor(string cl){
			color = cl;
		}
		
		void carModel(string mod){
			model = mod;
		}
		
		void display(){
	        cout << "Car_ID :- " << id << endl;
	        cout << "Car_Company_name :- " << comname << endl;
	        cout << "Car_Color :- " << color << endl;
	        cout << "Car_Model :- " << model << endl;
	        cout << "Car_Release_year :- " << reyear << endl;
	        cout << "------------------------" << endl;
    	}
		
};

int main(){

	Car c1,c2,c3,c4;
	
	c1.carId(1);
	c1.carComname("Toyota");
	c1.carColor("red");
	c1.carModel("de2132");
	c1.carReyear(2026);
	c1.display();
	
	c2.carId(2);
	c2.carComname("Mahindra");
	c2.carColor("Black");
	c2.carModel("yp1211");
	c2.carReyear(2009);
	c2.display();
	
	c3.carId(3);
	c3.carComname("Hyundai-Kia");
	c3.carColor("Orenge");
	c3.carModel("ysd231");
	c3.carReyear(2011);
	c3.display();
	
	c4.carId(4);
	c4.carComname("Honda");
	c4.carColor("yellow");
	c4.carModel("23df2s");
	c4.carReyear(2023);
	c4.display();
	
	return 0;
}
