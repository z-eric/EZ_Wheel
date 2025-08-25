# EZ Wheel
Because I didn't like any that were out there, I made another!  
Big wedges aren't dramatic, gotta have little wedges.  

## MVP Features
✅ Multiple wedges automatically created based on weights.  
✅ Duplicate wedges distributed amongst each other with minimal clumping.  
✅ Labels remembered between visits.  
✅ Unique colors for each wedge group.  

### Extended Features
✅ Automatic upscaling when total weights are low. (minimum wedge density)  
✅ No adjacent duplicates (for most cases).  
🔘 No adjacent duplicates (at all! (except when not enough others)).  
🔘 Wheel scaling with viewport.  
🔘 Mobile friendly.  
✅ Customizable wedge colors.  
✅ Built in theme options.  
🔘 Fully custom theme slot.  
✅ Settings (duration/toggle/speed/etc).

## Things I learned
- Implementing memo to prevent the wheel from re-rendering while animating.
- Implementing useContext to pass things throughout a large component tree when State passing by props becomes unwieldy.
- Tying useMemo into the context as well since subscribing to the context within the wheel made its own useMemo not work.
- Linking Stateful Context to Local Storage.
- SVG path drawing.
- Canvas drawing.  
- Generating elements within functions and returning them to a parent they depend on (SVG paths).  
- Conditionally rendered elements are (sometimes?) still "alive" even if behind a `<falsy> &&`.
- CSS keyframe animations.
- Getting the coordinates of user interaction.