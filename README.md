# EZ Wheel
Because I didn't like any that were out there, I made another!
Big wedges aren't dramatic, gotta have little wedges.

## MVP Features
[X] Multiple wedges automatically created based on weights.  
[X] Duplicate wedges distributed amongst each other with minimal clumping.  
[X] Labels remembered between visits.  
[X] Unique colors for each wedge group.  

### Extended Features
[] Automatic upscaling when total weights are low. (minimum wedge density)  
[X] No adjacent duplicates (for most cases).  
[] No adjacent duplicates (at all!).  
[] Wheel scaling with viewport.  
[] Mobile friendly.  
[] Customizable wedge colors.  
[] Built in theme options.  
[] Pointer "push back" simulation.  

## Things I learned
- Implementing useMemo to prevent the wheel from re-rendering while animating.
- Implementing useContext to pass things throughout a large component tree when State passing by props becomes unwieldy.
- Tying useMemo into the context as well since subscribing to the context within the wheel made its own useMemo not work.
- Linking Stateful Context to Local Storage.