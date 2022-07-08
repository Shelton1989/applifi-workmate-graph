"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequestsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestOrderByWithRelationInput_1 = require("../../../inputs/RequestOrderByWithRelationInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
const RequestScalarFieldEnum_1 = require("../../../../enums/RequestScalarFieldEnum");
let UserRequestsArgs = class UserRequestsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], UserRequestsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestOrderByWithRelationInput_1.RequestOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRequestsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], UserRequestsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRequestsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], UserRequestsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [RequestScalarFieldEnum_1.RequestScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], UserRequestsArgs.prototype, "distinct", void 0);
UserRequestsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UserRequestsArgs);
exports.UserRequestsArgs = UserRequestsArgs;
