#include<iostream>

using namespace std;

class Student{
	
	private:
		
		string name;
		int rollno;
		float gpa;
		
	public:
		
		Student(){
        	name = "";
        	rollno = 0;
        	gpa = 0.0;
    	}
    	
    	Student(string n, int rn, float g){
        	name = n;
        	rollno = rn;
        	gpa = g;
    	}
    	    	
    	Student(const Student &s){
    		name = s.name;
    		rollno = s.rollno;
    		gpa = s.gpa;
		}
		
		string getName()const{
        	return name;
    	}

    	int getRollNo()const{
        	return rollno;
    	}

    	float getGPA()const{
    	    return gpa;
    	}
    	
    	void print()const{
    		string name;
    		int rollno;
    		float gpa;
    		
        	cout << "Name :- ";
        	cin >> name;
        	
			cout << "Roll No :- ";
        	cin >> rollno;
        	
			cout << "GPA :- ";
        	cin >> gpa;
        	
			cout << "----------------------" << endl;
    	}
    	
};

class StudentRecordManager{
	
	private:
		
		Student* students;
		int size;
		int capacity;
		
	public:
		
		
	
};

int main(){
	
	int n;
	Student s1;
	
	cout << "Enter your choice :- ";
	cin >> n;
	
	for(int i=0 ; i<n ; i++){
		s1.print();
	}
	
	
	return 0;
	
}