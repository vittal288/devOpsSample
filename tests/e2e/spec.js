//spec.js
describe('AngularJS Demo App', function() {
  it('should have a title', function() {
    browser.get('http://localhost:8000/');
    expect(browser.getTitle()).toEqual('Customer Dining');
  });
});


//login
describe('LOGIN ',function(){
    //var ptor = protractor.getInstance();
    
    
     it('should SUCCESS',function(){
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M1002');
        element(by.model('pass')).sendKeys('password');
        
        //$scope.entiredata
        element(by.css('.btn-success')).click();
        expect(browser.getCurrentUrl())
        .toBe('http://localhost:8000/#/notification');   
    });
    
    
     it('should FAIL by username',function(){
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M1002123');
        element(by.model('pass')).sendKeys('password');
                
        element(by.css('.btn-success')).click();        
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('invalid username');
        //should click on OK button otherwise browser will not load itself
        browser.switchTo().alert().accept();
    });
    
    it('should FAIL by Password',function(){
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M1002');
        element(by.model('pass')).sendKeys('password123');
                
        element(by.css('.btn-success')).click();        
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('invalid password');
        //should click on OK button otherwise browser will not load itself
        browser.switchTo().alert().accept();
    });
    
    it('should FAIL from username and password',function(){
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M10021234');
        element(by.model('pass')).sendKeys('password123');
                
        element(by.css('.btn-success')).click();        
        var alertDialog = browser.switchTo().alert();
        expect(alertDialog.getText()).toEqual('invalid username');
        //should click on OK button otherwise browser will not load itself
        browser.switchTo().alert().accept();
    });
});



describe('HOME PAGE',function(){   
   it('should load location view, after clicking on bell icon',function(){  
       
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M1002');
        element(by.model('pass')).sendKeys('password');
        
        //success login 
        element(by.css('.btn-success')).click();
        expect(browser.getCurrentUrl())
        .toBe('http://localhost:8000/#/notification');        
        
        //after success login will able to get bell icon in DOM or in element object  
        expect(element(by.id('locationHref')).getAttribute('href')).toEqual('http://localhost:8000/#/location');     
        // element(by.css('.badge')).click();
        // expect(browser.getCurrentUrl())
        // .toBe('http://localhost:8000/#/location');   
   }); 
   
   
   it('should load rating view, after clicking on Rating label',function(){  
       
        browser.get('http://localhost:8000/');
        element(by.model('user')).sendKeys('M1002');
        element(by.model('pass')).sendKeys('password');
        
        //success login 
        element(by.css('.btn-success')).click();
        expect(browser.getCurrentUrl())
        .toBe('http://localhost:8000/#/notification');  
        
         //after success login will able to get bell icon in DOM or in element object  
        // element(by.css('.glyphicon-bell')).click();
        // expect(browser.getCurrentUrl())
        // .toBe('http://localhost:8000/#/location');  
         expect(element(by.id('locationHref')).getAttribute('href')).toEqual('http://localhost:8000/#/location');        
        
            
        //element(by.css('.slide2')).click();        
        //expect(browser.getCurrentUrl())
        //.toBe('http://localhost:8000/#/rating');   
   }); 
   
   
});



   




