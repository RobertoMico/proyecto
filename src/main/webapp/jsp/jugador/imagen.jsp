    <script type="text/javascript">
        $(document).ready(function () {
            
            $("#uploadForm").submit(function () {
                var form = document.getElementById('uploadForm');
                var id = document.getElementById("id").value;
                
                oformData= new FormData(form);
                oformData.append("id",id);
                this.timer = setTimeout(function () {
                    $.ajax({
                        url: 'upload',
                        processData: false,
                        contentType: false,
                        enctype: 'multipart/form-data',
                        mimeType:"multipart/form-data",
                        data: oformData, 
                        //data: 'filename=' + $('#file').val(),
                        type: 'post',
                        success: function (msg) {
                            //$("#spinner").fadeOut(1000);
                            $("#spinner").empty().append(msg);
                        }

                    });
                }, 200);
                return false;
            });

        });

    </script>




        <div>
            <h3>Seleccione la imagen del jugador</h3>
            <form id="uploadForm" action="upload" method="post" enctype="multipart/form-data">
                <input type="hidden" id="id" name="id" placeholder="id" />
                
                <input type="file" id="file" name="file" /><br/><br/>
                
                <input type="submit" value="upload file" /><br/>
            </form>          
            <div id="spinner"></div>
        </div>
