"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestCreateManyReporterInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestCreatesocialLinksInput_1 = require("../inputs/RequestCreatesocialLinksInput");
const REQUEST_STATUS_1 = require("../../enums/REQUEST_STATUS");
const REQUEST_TYPE_1 = require("../../enums/REQUEST_TYPE");
let RequestCreateManyReporterInput = class RequestCreateManyReporterInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "subject", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "message", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_TYPE_1.REQUEST_TYPE, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "type", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestCreatesocialLinksInput_1.RequestCreatesocialLinksInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestCreatesocialLinksInput_1.RequestCreatesocialLinksInput)
], RequestCreateManyReporterInput.prototype, "socialLinks", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "entityId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => REQUEST_STATUS_1.REQUEST_STATUS, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], RequestCreateManyReporterInput.prototype, "requestResolution", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RequestCreateManyReporterInput.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Date)
], RequestCreateManyReporterInput.prototype, "updatedAt", void 0);
RequestCreateManyReporterInput = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestCreateManyReporterInput", {
        isAbstract: true
    })
], RequestCreateManyReporterInput);
exports.RequestCreateManyReporterInput = RequestCreateManyReporterInput;
