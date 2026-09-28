#include<iostream>

using namespace std;

class P{
	
	public:
		float cels;
		
};

class Q : public P{
	
	public:
		
		float fahr;
		
	void toFehrenheit(){
		cout << "Enter temprature  in Celusius :- ";
		cin >> cels;
		
		fahr = (cels * 9/5) + 32;
		cout << endl;
		cout << "--------------------------------------" << endl;
		cout << "Temperature in Fahrenheit = " << fahr << endl;
	}
};

class R : public Q{
	
	public:
		
    void toKelvin(){
    	
        float kel;

        kel = ((fahr - 32) * 5/9) + 273.15;
        cout << "Temperature in Kelvin  = " << kel;
        cout << endl;
        cout << "--------------------------------------" << endl;
    }
}; 

int main(){
	
	R tem;

    tem.toFehrenheit();
    tem.toKelvin();
	
	return 0;
}