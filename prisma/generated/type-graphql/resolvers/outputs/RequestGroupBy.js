"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestGroupBy = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCountAggregate_1 = require("../outputs/RequestCountAggregate");
const RequestMaxAggregate_1 = require("../outputs/RequestMaxAggregate");
const RequestMinAggregate_1 = require("../outputs/RequestMinAggregate");
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let RequestGroupBy = class RequestGroupBy {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "reporterName", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "reporterEmail", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [String], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], RequestGroupBy.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestGroupBy.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RequestGroupBy.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], RequestGroupBy.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCountAggregate_1.RequestCountAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCountAggregate_1.RequestCountAggregate)
], RequestGroupBy.prototype, "_count", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMinAggregate_1.RequestMinAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMinAggregate_1.RequestMinAggregate)
], RequestGroupBy.prototype, "_min", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestMaxAggregate_1.RequestMaxAggregate, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestMaxAggregate_1.RequestMaxAggregate)
], RequestGroupBy.prototype, "_max", void 0);
RequestGroupBy = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RequestGroupBy", {
        isAbstract: true
    })
], RequestGroupBy);
exports.RequestGroupBy = RequestGroupBy;
