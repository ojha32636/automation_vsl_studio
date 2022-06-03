class editorPage{
editorlogo(){
    cy.get("img[src='/_next/image?url=%2Fimages%2Flogo.svg&w=384&q=75']");
    return this();
}
resizebtn(){
    cy.get("div[class='Header_vsl_editor_header_logo__3hogh'] button[class='vsl_btn']");
    return this();
}
temp_title(){
    cy.get("div[class='Header_vsl_header_menu__6j3bB'] h3");
    return this();
}
savebtn(){
    cy.get(".vsl_btn.editorSaveBtn");
    return this();
}
renderbtn(){
    cy.get("button[class='vsl_btn vsl_light_btn']");
    return this();
}
profilepic(){
    cy.get("img[src='../../images/profile.jpg']")
    return this();
}
profileoption(){
    cy.get("div[class='Header_vsl_profile_user__RNDm0'] h3");
    return this();
}
layersidebar(){
    cy.get(".vsl_editor_empty_box");
    return this();
}
sidebarclose(){
    cy.get("div[class='vsl_layer_wrapper'] div[class='vsl_sidebar_close']");
    return this();
}
editoritembox(){
    cy.get(".Editor_vsl_tabs_box__2QYeM");
    return this();
}
timeline(){
    cy.xpath("//div[@class='Editor_vsl_timeline_inner__2SHsV']")
    return this();
}
timelineelements(){
    cy.get(".vsl_timeline_elements");
    return this();
}
timelineclose(){
    cy.get(".vsl_timeline_close");
    return this();
}
playpausebtn(){
    cy.get("div[class='vsl_playPause']");
    return this();
}
restartbtn(){
    cy.get("div[class='vsl_player_restart']");
    return this();
}
time(){
    cy.get("div[class='vsl_video_controller'] div[class='vsl_time']");
    return this();
}
progressbar(){
    cy.get("div[class='vsl_video_controller'] div[class='vsl_progress']");
    return this();
}
progressbtn(){
    cy.get("div[class='vsl_video_controller'] div[class='vsl_progress_handle']");
    return this();
}
captionbtn(){
    cy.get("div[class='vsl_closed_caption ccOff ']");
    return this();
    
}
volumebtn(){
    cy.get("div[class='vsl_volume']");
    return this();
}

timeinput(){
    cy.get("div[class='vsl_time_input'] input[value='30']");
    return this();
}

editbtn(){
    cy.get(".timeFrameDurationEdit.vsl_btn");
    return this();
}



}