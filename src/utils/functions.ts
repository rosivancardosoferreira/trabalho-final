export function DoubleSpaceRemover(e: string) {
    let size = e.length;
    if(size > 0 && e.substring(size-2,size-1) === " " && e.substring(size-1,size) === " " ) {
      return e.substring(0,size-1).replace("  ", " ");
    }else{
      return e.replace("  ", " ");
    }
}