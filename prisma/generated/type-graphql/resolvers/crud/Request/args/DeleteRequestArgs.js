"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRequestArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const RequestWhereUniqueInput_1 = require("../../../inputs/RequestWhereUniqueInput");
let DeleteRequestArgs = class DeleteRequestArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => RequestWhereUniqueInput_1.RequestWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", RequestWhereUniqueInput_1.RequestWhereUniqueInput)
], DeleteRequestArgs.prototype, "where", void 0);
DeleteRequestArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteRequestArgs);
exports.DeleteRequestArgs = DeleteRequestArgs;
