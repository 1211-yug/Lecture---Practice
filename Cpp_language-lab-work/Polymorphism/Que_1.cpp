#include<iostream>

using namespace std;

class Arithmetic{
		
	public:
		
		void calculate(int a, int b){
			cout << "Division = " << a / b << endl;	
		}
		
		void calculate(int a, int b, int c){
			cout << "subtraction = " << a - b - c << endl;	
		}
		
		void calculate(int a, int b, int c, int d){
			cout << "multiplication = " << a * b * c * d << endl;	
		}
		
		void calculate(int a, int b, int c, int d, int e){
			cout << "addition = " << a + b + c + d + e << endl;	
		}
			
};

int main(){
	
	Arithmetic a1;
	
	a1.calculate(20,10);
	a1.calculate(30,10,5);
	a1.calculate(10,20,10,20);
	a1.calculate(30,20,40,10,30);
	
	return 0;
}