"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestUpdateManyMutationInput_1 = require("../../../inputs/RequestUpdateManyMutationInput");
const RequestWhereInput_1 = require("../../../inputs/RequestWhereInput");
let UpdateManyRequestArgs = class UpdateManyRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateManyMutationInput_1.RequestUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateManyMutationInput_1.RequestUpdateManyMutationInput)
], UpdateManyRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereInput_1.RequestWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", RequestWhereInput_1.RequestWhereInput)
], UpdateManyRequestArgs.prototype, "where", void 0);
UpdateManyRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyRequestArgs);
exports.UpdateManyRequestArgs = UpdateManyRequestArgs;
