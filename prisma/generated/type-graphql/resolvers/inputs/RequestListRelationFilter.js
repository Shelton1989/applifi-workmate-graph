"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestWhereInput_1 = require("../inputs/RequestWhereInput");
let RequestListRelationFilter = class RequestListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], RequestListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], RequestListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], RequestListRelationFilter.prototype, "none", void 0);
RequestListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("RequestListRelationFilter", {
        isAbstract: true
    })
], RequestListRelationFilter);
exports.RequestListRelationFilter = RequestListRelationFilter;
