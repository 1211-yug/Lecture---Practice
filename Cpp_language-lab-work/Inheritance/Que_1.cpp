#include<iostream>

using namespace std;

class X{
	
	public:
		
		int a,b,c;
		
};

class Y : public X{
	
	public:
		
		void setData(){
			
			cout << "Enter A numbers :- ";
			cin >> a;
			
			cout << "Enter B numbers :- ";
			cin >> b;
			
			cout << "Enter C numbers :- ";
			cin >> c;
			
		}
		
		void getData(){
			
			int cube;
			cube = (a*a*a) + (b*b*b) + (c*c*c);
			
			cout << "=====================" << endl;
			cout << "Sum of cubes :- " << cube << endl;
			cout << "=====================" << endl;
		}
};

int main(){
	
	Y cubes;
	
	cubes.setData();
	cubes.getData();

	return 0;	
}

