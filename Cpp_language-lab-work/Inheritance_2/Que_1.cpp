#include<iostream>

using namespace std;

class RBI{
	
	public:
    	float rate;
    	
    	void getROI(){
    		cout << "Rate of Interest :- " << rate << "%" << endl;
    	}
};

class SBI : public RBI{

	public:
		
		SBI(){
        	rate = 6.5;
    	}
				
};

class BOB : public RBI{
	
	public:
		
		BOB(){
			rate = 7.1;
		}
	
};

class ICICI : public RBI{
	
	public:
		
		ICICI(){
			rate = 7.5;
		}
};

int main (){
	
	SBI s;
    BOB b;
    ICICI i;

    cout << "SBI -> ";
    s.getROI();
	
	cout << "BOB -> ";
	b.getROI();
	
	cout << "ICICI -> ";
	i.getROI();
	
	return 0;
}