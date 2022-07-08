"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestOrderByWithRelationInput_1 = require("../../../inputs/RequestOrderByWithRelationInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
let AggregateRequestArgs = class AggregateRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], AggregateRequestArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestOrderByWithRelationInput_1.RequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateRequestArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], AggregateRequestArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRequestArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateRequestArgs.prototype, "skip", void 0);
AggregateRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateRequestArgs);
exports.AggregateRequestArgs = AggregateRequestArgs;
