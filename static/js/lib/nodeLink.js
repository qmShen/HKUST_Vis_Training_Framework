/**
 * Created by yiding on 2017/1/1.
 */
let NodeLink = function(svg, graph){
    this.charge = 120;
    this.linkDistance = 50;
    this.gravity = 0.1;
    this.graphData = graph;
    this.linkElements = null;
    this.nodeElements = null;
    this.width = svg.clientWidth;
    this.height = svg.clientHeight;
    this.svg = svg;
    this.color = d3.scale.category20();
};

NodeLink.prototype.initForce = function(){
    var graph = this.graphData;
    var _this = this;
    this.force_simu = d3.layout.force()
        .charge(-1 * this.charge)
        .gravity(this.gravity)
        .linkDistance(this.linkDistance)
        .size([this.width, this.height]);
    this.force_simu.nodes(graph.nodes);
    this.force_simu.links(graph.links);
};

NodeLink.prototype.initRender = function(g){
    var graph = g? g: this.graphData;
    var _this = this;
    var svg_container = d3.select(this.svg);
    this.linkElements = svg_container.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr('stroke','grey')
        .attr('stroke-opacity', 0.4)
        .attr("stroke-width", 2 );

    this.nodeElements = svg_container.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(graph.nodes)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", function(d) {
            return _this.color(d['group']);
        });
    var nodeElements = this.nodeElements;
    var linkElements = this.linkElements;
    this.linkElements
            .attr("x1", function(d) { return 100; })
            .attr("y1", function(d) { return 100; })
            .attr("x2", function(d) { return 100; })
            .attr("y2", function(d) { return 100; });

    this.force_simu.on('tick',function(){
        if(nodeElements == null && linkElements == null){
            return;
        }
        linkElements
            .attr("x1", function(d) { return d.source.x; })
            .attr("y1", function(d) { return d.source.y; })
            .attr("x2", function(d) { return d.target.x; })
            .attr("y2", function(d) { return d.target.y; });

        nodeElements
            .attr("cx", function(d) {
                return d.x;
            })
            .attr("cy", function(d) {
                return d.y;
            });
    });
};

NodeLink.prototype.setData = function(graph){
    if(graph)
        this.graphData = graph;

};
NodeLink.prototype.setWidth = function(w){
    this.width = w;
};
NodeLink.prototype.setHeight = function(h){
    this.height = h;
};
NodeLink.prototype.run = function(){
    this.initForce();
    this.initRender();
    this.force_simu.start()
};
NodeLink.prototype.updateForce = function(){
    if(this.force_simu){
        this.force_simu
            .charge(-1 * this.charge)
            .gravity(this.gravity)
            .linkDistance(this.linkDistance)
            .start()
    }
};

NodeLink.prototype.setCharge = function(c){
    this.charge = c;
    this.updateForce();
};
NodeLink.prototype.setLinkDistance = function(ld){
    this.linkDistance = ld;
    this.updateForce();
};
NodeLink.prototype.setGravity = function(g){
    this.gravity = g;
    this.updateForce();
};