// 1. useMemo
// useMemo – React-da performansı artırmaq üçün istifadə olunan bir hook-dur. O, verilən bir funksiyanı yadda saxlayır və yalnız dəyərlər dəyişəndə yenidən hesablayır.Təsəvvür elə ki, bir komponentdə çox ağır bir hesablama var və bu hesablama hər render zamanı yenidən işləyir. useMemo ilə bu hesablama yalnız lazım olduqda işləyəcək və performansı yaxşılaşdıracaq.


// 2.useCallback 
// useCallback funksiyaları yadda saxlamaq üçün istifadə olunur ki, hər render zamanı yeni funksiya yaradılmasın.
// Bu, xüsusilə callback funksiyaları olan komponentlərdə performansı artırır.
// Nə vaxt useCallback istifadə etməliyik?
// Eyni funksiyanı təkrar istifadə etmək lazımdırsa və hər dəfə yenidən yaradılmasını istəmiriksə.
// Funksiya asanlıqla dəyişməyən dəyərlərlə işləyirsə.
// Nə vaxt useCallback istifadə etməyə ehtiyac yoxdur?
// Əgər funksiya birbaşa JSX daxilində istifadə olunursa və heç bir child komponentə göndərilmirsə, useCallback istifadə etməyə ehtiyac yoxdur.
// Kiçik və sadə komponentlərdə əlavə optimizasiya lazım olmaya bilər.


// 3.useLayoutEffect
// DOM dəyişiklikləri edilməmişdən əvvəl React komponenti yükləndikdə icra olunur.
// useEffect-dən fərqli olaraq, layout tamamlanmazdan əvvəl işləyir.

// 4.Custom Hooks (Özəl Hook-lar) React-də təkrar istifadə olunan məntiqi ayrıca bir funksiya şəklində yazmaq üçün istifadə olunur. Əgər bir neçə komponentdə eyni funksionallıq lazım olursa, kodun təkrarını azaltmaq və daha təmiz kod yazmaq üçün Custom Hooks yaradılır.

// 5.React Portals – React-də bir komponentin DOM ağacında başqa bir yerə render olunmasına imkan verən bir texnikadır. Bu, əsasən modal pəncərələr, tooltiplər, dropdown-lar və s. üçün istifadə olunur ki, komponentlər əsas div#root içərisində deyil, sənədin başqa bir hissəsində göstərilə bilsin.
// Portals necə işləyir?
// ReactDOM.createPortal(element, targetContainer) funksiyası istifadə olunur.
// element – render olunacaq React elementi (məsələn, <div>Salam</div>).
// targetContainer – harada göstəriləcəyi (document.getElementById("modal-root")).