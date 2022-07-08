"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let RequestMinAggregate = class RequestMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestMinAggregate.prototype, "userId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RequestMinAggregate.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RequestMinAggregate.prototype, "updatedAt", void 0);
RequestMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("RequestMinAggregate", {
        isAbstract: true
    })
], RequestMinAggregate);
exports.RequestMinAggregate = RequestMinAggregate;
