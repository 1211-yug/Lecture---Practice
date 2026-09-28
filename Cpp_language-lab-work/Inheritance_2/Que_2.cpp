#include<iostream>

using namespace std;

class Firstno{
	
	public:
		int fn;
		
		void firstno(){
			cout << "Enter first number :- ";
			cin >> fn;	
		}
		
};

class Secondno{
	
	public:
		int sn;
		
		void secondno(){
			cout << "Enter second number :- ";
			cin >> sn;
		}
		
};

class Thirdno{
	
	public:
		int tn;
		
		void thirdno(){
			cout << "Enter third number :- ";
			cin >> tn;
		}
		
};

class Fourno{
	
	public:
		int fon;
		
		void fourno(){
			cout << "Enter four number :- ";
			cin >> fon;
		}
		
};

class Sum : public Firstno, public Secondno, public Thirdno, public Fourno{
	
	public:
		int sum;
		
		void sums(){
			sum = fn + sn + tn + fon;
			
			cout << "Sum of four different numbers :- " << sum << endl;
		}	
};



int main(){
	
	Sum s1;
	
	s1.firstno();
	s1.secondno();
	s1.thirdno();
	s1.fourno();
	s1.sums();
	
	
	return 0;
}