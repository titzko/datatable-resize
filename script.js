

$(document).ready(function () {
    // Resize the demo table container with mouse drag
    var wrapper = $('#resize_wrapper');
    $('#resize_handle').on('mousedown', function (e) {
        var mouseStartY = e.pageY;
        var resizeStartHeight = wrapper.height();

        // note: you can also remove/replace the 'demo' in the following functions. it is jsut for event-namespacing

        $(document)
            .on('mousemove.myeventnamespace', function (e) {
                var height = resizeStartHeight + (e.pageY - mouseStartY);
                if (height < 180) {
                    height = 180;
                }

                wrapper.height(height);
            })
            .on('mouseup.myeventnamespace', function (e) {
                $(document).off('mousemove.myeventnamespace mouseup.myeventnamespace');
            });

        return false;
    });

    // DataTables initialisation
    var table = $('#example').DataTable({
        scrollResize: true,
        scrollX: true,
        scrollY: 100,
        scrollCollapse: true,
        paging: false,
        columnDefs: [
            { visible: false, targets: 1 }
        ]
    });
});
