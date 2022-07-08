"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestUpdateInput_1 = require("../../../inputs/RequestUpdateInput");
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
let UpdateRequestArgs = class UpdateRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestUpdateInput_1.RequestUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestUpdateInput_1.RequestUpdateInput)
], UpdateRequestArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], UpdateRequestArgs.prototype, "where", void 0);
UpdateRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateRequestArgs);
exports.UpdateRequestArgs = UpdateRequestArgs;
